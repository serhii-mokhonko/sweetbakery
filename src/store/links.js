export default {
    state: {
        links: [
            { href: '/', name: 'Home', icon: 'home' },
            { href: '/about', name: 'About', icon: 'person' },
            { href: '/contacts', name: 'Contact me', icon: 'contacts' },
            { href: '/shopping-card', name: 'Card', icon: 'shopping_cart' },
            { href: '/Login', name: 'Login', icon: 'vpn_key' },
            { href: '/admin/add-new-goods', name: 'New Goods', icon: 'fiber_new' },
            { href: '/admin/goods', name: 'List of Goods', icon: 'list' },
        ]
    },
    mutation: {

    },
    actions: {

    },
    getters: {
        getLinks(state) {
            return state.links
        }
    }
}