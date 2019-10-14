import * as firebase from 'firebase'
export default {
    state: {
        user: null
    },
    mutation: {},
    actions: {
        async loginUser({ mutation }, { email, password }) {
            await firebase.auth().signInWithEmailAndPassword(email, password)
                // .then((user) => console.log(user.user['uid']))
                .catch(err => console.log(err))
        }
    },
    getters: {}
}