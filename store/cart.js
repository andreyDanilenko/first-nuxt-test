export const state = () => ({
    cart: [],
})

export const mutations = {
    setCart(state, product) {
    
        state.cart.push(product)
    },
}

export const actions = {
    addToCart({ commit }, product) {
        commit('setCart', product)
    },
}

export const getters = {

}