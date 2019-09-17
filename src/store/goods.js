export default {
    state: {
        goodsArray: [
            {id: 0, title: 'Cake', description: 'Here description', price: 170, imgSrc: 'https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
            {id: 1, title: 'Cake 2', description: 'Here description', price: 150, imgSrc: 'https://images.pexels.com/photos/685527/pexels-photo-685527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
            {id: 2, title: 'Cake 3', description: 'Here description', price: 250, imgSrc: 'https://images.pexels.com/photos/2014693/pexels-photo-2014693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
            {id: 3, title: 'Сake 4', description: 'Here description', price: 215, imgSrc: 'https://images.pexels.com/photos/635409/pexels-photo-635409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
            {id: 4, title: 'Cake 5', description: 'Here description', price: 300, imgSrc: 'https://images.pexels.com/photos/552535/pexels-photo-552535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getGoodsArray (state) {
            return state.goodsArray
        }
    }
}