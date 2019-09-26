import * as firebase from "firebase"

// const storageRef = firebase.storage().ref();

class Newgoods {
    constructor (title, description, taste, unit, price, accessibility, imgSrc=null, id=null) {
        this.title = title,
        this.description = description,
        this.taste = taste,
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
                    new Newgoods(snapshot[el].title, snapshot[el].description, snapshot[el].taste, snapshot[el].unit, snapshot[el].price, snapshot[el].accessibility, snapshot[el].imgSrc, el)
                )
                commit('loadedGds', gdsArr)
            })
        },
        async getGoodsById (context, payload) {
            const dbData = await firebase.database().ref('goods/' + payload).once('value')
            return dbData.val()
        },
        //add new goods to the firebase database
        async addNewGoods ({ commit }, payload) {
            commit('setLoading', true)
            const newGds = new Newgoods (
                payload.title,
                payload.description,
                payload.taste,
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
        }

    },
    getters: {
        getGoodsArray (state) {
            return state.goodsArray
        }
    }
}