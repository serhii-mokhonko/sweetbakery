import * as firebase from 'firebase'

class Goods {
    constructor(name, count, unit, sum, imgSrc, taste = null, keks = null, fill = null, cream = null, decor = null, comment = null, id = 0, done = false) {
        this.name = name
        this.count = count
        this.unit = unit
        this.sum = sum
        this.imgSrc = imgSrc
        this.taste = taste
        this.keks = keks
        this.fill = fill
        this.cream = cream
        this.decor = decor
        this.comment = comment
        this.id = id
        this.done = done
    }
}

export default {
    state: {
        card: [],
    },
    mutations: {
        addToCard(state, payload) {
            state.card.push(payload)
        },
        deleteFromCard(state, payload) {
            const index = state.card.findIndex(el => el.id == payload)
            state.card.splice(index, 1)
        },
        updateCardFromStorage(state, payload) {
            state.card = payload
        },
        clearCard (state) {
            state.card = []
        }
    },
    actions: {
        addToCard({ commit, getters }, payload) {
            let gid = payload.id
            if (getters.getCard.length > 0) {
                getters.getCard.forEach(element => {
                    gid = element.id + 1
                });
            }
            const order = new Goods(
                payload.name,
                payload.count,
                payload.unit,
                payload.sum,
                payload.imgSrc,
                payload.taste,
                payload.keks,
                payload.fill,
                payload.cream,
                payload.decor,
                payload.comment,
                gid
            )
            commit('addToCard', order)
            //add data to local storage
            let jsonCard = JSON.stringify(getters.getCard)
            localStorage.setItem('shoppingCard', jsonCard)
        },
        deleteFromCard({ commit, getters }, id) {
            commit('deleteFromCard', id)
            //update data in local storage
            let jsonCard = JSON.stringify(getters.getCard)
            localStorage.setItem('shoppingCard', jsonCard)
        },
        updateCardFromStorage({ commit }) {
            const storageCard = JSON.parse(localStorage.getItem('shoppingCard'))
            if (Array.isArray(storageCard)) {
                commit('updateCardFromStorage', storageCard)
            }
        },
        async order({ commit, getters }, client) {
            commit('setLoading', true)
            const uid = await firebase.database().ref('clients').push(client).key
            const newOrder = await firebase.database().ref('orders').push()
            await newOrder.set({
                ...getters.getCard,
                client: uid
            })
            commit('clearCard')
            commit('setLoading', false)
        }
    },
    getters: {
        getCard(state) {
            return state.card
        }
    }
}