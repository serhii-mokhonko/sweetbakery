export default {
    state: {
        links: [
            {href: '/', name: 'Home', icon: 'home'},
            {href: '/about', name: 'About', icon: 'person'},
            {href: '/contacts', name: 'Contact me', icon: 'contacts'},
            {href: '/shopping-card', name: 'Card', icon: 'shopping_cart'},
        ]
    },
    mutation: {

    },
    actions: {

    },
    getters: {
        getLinks (state) {
            return state.links
        }
    }
}