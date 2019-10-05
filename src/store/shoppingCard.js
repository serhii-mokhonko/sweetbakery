import * as firebase from 'firebase'

class Goods {
    constructor(name, count, unit, sum, taste=null, keks=null, fill=null, cream=null, decor=null, comment=null, gid=null, done=false){
        this.name = name
        this.count = count
        this.unit = unit
        this.sum = sum
        this.taste = taste
        this.keks = keks
        this.fill = fill
        this.cream = cream
        this.decor = decor
        this.comment = comment
        this.gid = gid
        this.done = done
    }
}

export default {
    state: {
        card: [],
    },
    mutations: {
        addToCard (state, payload) {
            state.card.push(payload)
        },
        deleteFromCard (state, payload) {
        }
    },
    actions: {
        addToCard ({commit}, payload) {
            const order = new Goods (
                payload.name,
                payload.count,
                payload.unit,
                payload.sum,
                payload.taste,
                payload.keks,
                payload.fill,
                payload.cream,
                payload.decor,
                payload.comment,
                payload.gid
            )
            commit('addToCard', order)
        },
        deleteFromCard ({commit}, payload) {
        }
    },
    getters: {
        getCard (state) {
            return state.card
        }
    }
}