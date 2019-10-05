import * as firebase from 'firebase'

class Goods {
    constructor(name, count, unit, sum, taste=null, keks=null, fill=null, cream=null, decor=null, uid=null, done=false){
        this.name = name
        this.count = count
        this.unit = unit
        this.sum = sum
        this.taste = taste
        this.keks = keks
        this.fill = fill
        this.cream = cream
        this.decor = decor
        this.uid = uid
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
        deleteFromCard (state, payload) {}
    },
    actions: {
        addToCard ({commit}, payload) {
            commit('addToCard', payload)
        },
        deleteFromCard ({commit}, payload) {}
    },
    getters: {}
}