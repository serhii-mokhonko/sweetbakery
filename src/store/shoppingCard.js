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
        },
        deleteFromCard({ commit }, id) {
            commit('deleteFromCard', id)
        }
    },
    getters: {
        getCard(state) {
            return state.card
        }
    }
}