export default {
    state: {
        user: null
    },
    mutation: {},
    actions: {
        loginUser ({mutation}, payload) {
            console.log(payload.login, payload.password)
            /*...*/
        }
    },
    getters: {}
}