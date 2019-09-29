import * as firebase from "firebase"

// const storageRef = firebase.storage().ref();

class Newgoods {
    constructor (title, description, count=null, taste=null, keks=null, fill=null, cream=null, decor=null, unit, price, accessibility, imgSrc=null, id=null) {
        this.title = title,
        this.description = description,
        this.count = count,
        this.taste = taste,
        this.keks = keks,
        this.fill = fill,
        this.cream = cream,
        this.decor = decor,     
        this.unit = unit,
        this.price = price,
        this.accessibility = accessibility,
        this.imgSrc = imgSrc,
        this.id = id
    }
}

export default {
    state: {
        goodsArray: []
    },
    mutations: {
        updateGoodsArray (state, payload) {
            state.goodsArray.push(payload)
        },
        loadedGds (state, payload) {
            state.goodsArray = payload
        },
        delGoods (state, payload) {
            const index = state.goodsArray.findIndex((el) => el.id === payload)
            state.goodsArray.splice(index, 1)
        }
    },
    actions: {
        //fetch data from database
        async getGoods ({commit}) {
            const gdsArr = [];
            const data = await firebase.database().ref('goods').once('value')
            const snapshot = data.val()
            Object.keys(snapshot).forEach((el) => {
                gdsArr.push(
                    new Newgoods(
                        snapshot[el].title, 
                        snapshot[el].description, 
                        snapshot[el].count, 
                        snapshot[el].taste, 
                        snapshot[el].keks, 
                        snapshot[el].fill, 
                        snapshot[el].cream, 
                        snapshot[el].decor, 
                        snapshot[el].unit, 
                        snapshot[el].price, 
                        snapshot[el].accessibility, 
                        snapshot[el].imgSrc, 
                        el
                    )
                )
                commit('loadedGds', gdsArr)
            })
        },
        async getGoodsById (context, payload) {
            const dbData = await firebase.database().ref('goods/' + payload).once('value')
            return dbData.val()
        },
        async updateGoods ({commit}, pl) {
            commit('setLoading', true)
            const gds = new Newgoods (
                pl.title,
                pl.description,
                pl.count,
                pl.taste,
                pl.keks,
                pl.fill,
                pl.cream,
                pl.decor,
                pl.unit,
                pl.price,
                pl.accessibility,
                pl.imgSrc
            )

            let imgSrc = gds.imgSrc
            if(pl.img){
                const getFileExtention = pl.img['name'].slice(pl.img['name'].lastIndexOf('.'))
                const fileName = pl.id + getFileExtention
    
                await firebase.storage().ref('goods').child(fileName).put(pl.img)
                await firebase.storage().ref('goods').child(fileName).getDownloadURL()
                    .then(url => {imgSrc = url})
            }

            await firebase.database().ref('goods').child(pl.id).update({...gds, imgSrc})

            commit('setLoading', false)

 
        },
        //add new goods to the firebase database
        async addNewGoods ({ commit }, payload) {
            commit('setLoading', true)
            const newGds = new Newgoods (
                payload.title,
                payload.description,
                payload.count,
                payload.taste,
                payload.keks,
                payload.fill,
                payload.cream,
                payload.decor,
                payload.unit,
                payload.price,
                payload.accessibility
            )
            
            //creating empty goods and getting id
            const goodsKey = await firebase.database().ref('goods').push().key
           
            //creating filename
            const getFileExtention = payload.img['name'].slice(payload.img['name'].lastIndexOf('.'))
            const fileName = goodsKey + getFileExtention
            
            //upload images
            await firebase.storage().ref('goods').child(fileName).put(payload.img)
            let imgSrc = null
            await firebase.storage().ref('goods').child(fileName).getDownloadURL()
                .then(url => {imgSrc = url})
            
            //upload goods data to database
            await firebase.database().ref('goods').child(goodsKey).set({...newGds, imgSrc})  
            
            //update data in goodsArray without fetch data from database
            commit('updateGoodsArray', {
                ...newGds,
                id: goodsKey,
                imgSrc

            })
            commit('setLoading', false)
        },
        async deleteGoods ({commit}, id) {
            //delete goods by id from database
            await firebase.database().ref('goods/'+id).remove()
                .then(() => commit('delGoods', id))
                .catch(() => console.log('Can\'t delete goods by id: ' + id))
            //getting file list from storage
            const files = await firebase.storage().ref('goods').listAll()
            //find necessary file
            const file = files.items.find((el) => {
                const fileName = el['name'].split('.')
                return fileName[0] === id
            })
            //delete file from storage
            await firebase.storage().ref(file.fullPath).delete()
                .catch(() => console.log('Can\'t delete file' + file.fullPath))
        }

    },
    getters: {
        getGoodsArray (state) {
            return state.goodsArray
        }
    }
}