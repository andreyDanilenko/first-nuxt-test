export const state = () => ({
    wishlist: [],
})

export const mutations = {
    setWishlist(state, product) {
        state.wishlist.push(product)
    },
}

export const actions = {
    addToWishlist({ commit }, product) {
        commit('setWishlist', product)
    },
}

export const getters = {

}