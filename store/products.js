export const state = () => ({
    products: []
})

export const mutations = {
    setProducts(state, products) {
        state.products = products
    }
}

export const actions = {
    async fetchProducts({ commit }) {
        try {
            const products = await this.$axios.$get('https://611a2bc9cbf1b30017eb5559.mockapi.io/product', {
            });
            commit("setProducts", products);
        } catch (e) {
            console.log(e)
        } finally {

        }
    }
}

export const getters = {
    sortedProducts(state) {
        return [...state.products]

    },
    sortedAndSearchedProducts(state, getters) {
        return getters.sortedProducts
    }
}