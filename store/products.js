export const state = () => ({
    products: [],
    isProductsLoading: true,
    searchQuery: '',
})

export const mutations = {
    setProducts(state, products) {
        state.products = products
    },

    setLoading(state, bool) {
        state.isProductsLoading = bool
    },

    setSearchQuery(state, searchQuery) {
        state.searchQuery = searchQuery
    },
}

export const actions = {
    async fetchProducts({ commit }) {
        try {
            const products = await this.$axios.$get('https://611a2bc9cbf1b30017eb5559.mockapi.io/product', {
            });
            commit("setProducts", products);
        } catch (e) {
            alert(e.message)
        } finally {
            commit('setLoading', false);
        }
    }
}

export const getters = {
    sortedProducts(state) {
        return [...state.products]

    },
    sortedAndSearchedProducts(state, getters) {
        return getters.sortedProducts.filter(product => product.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
}