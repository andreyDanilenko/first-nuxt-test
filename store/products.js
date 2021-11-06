export const state = () => ({
    products: [],
    isProductsLoading: true,
    searchQuery: '',
    selectedSort: '',
    requestTimeStamp: '',
})

export const mutations = {
    setProducts(state, products) {
        state.products = products
    },

    setLoading(state, bool) {
        state.isProductsLoading = bool
    },

    setLoading(state, bool) {
        state.isProductsLoading = bool
    },

    setSearchQuery(state, searchQuery) {
        state.searchQuery = searchQuery
    },

    setSelectedSort(state, selectedSort) {
        state.selectedSort = selectedSort
    },

    setRequestTimeStamp(state, requestTimeStamp) {

        state.requestTimeStamp = Math.floor(requestTimeStamp)
    },
}

export const actions = {
    async fetchProducts({ commit }) {
        const stamp = performance.now()
        try {
            const products = await this.$axios.$get('https://611a2bc9cbf1b30017eb5559.mockapi.io/product', {
            });
            commit("setProducts", products);
        } catch (e) {
            alert(e.message)
        } finally {
            commit('setLoading', false);
            commit("setRequestTimeStamp", performance.now() - stamp);
        }
    }
}

export const getters = {
    sortedProducts(state) {
        return [...state.products].sort((a, b) => (b[state.selectedSort] > a[state.selectedSort]) ? 1 : -1)

    },
    sortedAndSearchedProducts(state, getters) {
        return getters.sortedProducts.filter(product => product.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    }
}