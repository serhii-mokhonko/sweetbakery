import * as firebase from 'firebase'
export default {
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        clearUser(state) {
            state.user = null
        }
    },
    actions: {
        async loginUser({ commit }, { email, password }) {
            commit('setLoading', true)
            await firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => commit('setUser', user.user['uid']))
                .catch(err => console.log(err))
            commit('setLoading', false)
        },
        autoLogin({ commit }, user) {
            commit('setUser', user['uid'])
        },
        signOut({ commit }) {
            firebase.auth().signOut()
            commit('clearUser')
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    }
}