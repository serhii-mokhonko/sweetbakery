export default {
    state: {
        links: [
            { href: '/', name: 'Головна', icon: 'home' },
            { href: '/about', name: 'Про нас', icon: 'person' },
            { href: '/contacts', name: 'Контакти', icon: 'contacts' },
            { href: '/shopping-card', name: 'Кошик', icon: 'shopping_cart' },
            { href: '/Login', name: 'Вхід', icon: 'vpn_key' },
            { href: '/admin/add-new-goods', name: 'Додати товар', icon: 'fiber_new' },
            { href: '/admin/goods', name: 'Всі продукти', icon: 'list' },
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