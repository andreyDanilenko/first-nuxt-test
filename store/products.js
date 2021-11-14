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
        state.page = 1
        state.searchQuery = searchQuery
    },

    setSelectedSort(state, selectedSort) {
        state.selectedSort = selectedSort
    },

    setRequestTimeStamp(state, requestTimeStamp) {
        let stampTime = Math.floor(requestTimeStamp) / 1000
        state.requestTimeStamp = stampTime < 1 ? stampTime.toFixed(2) : stampTime.toPrecision(2);
    },

    setPage(state, page) {
        state.page = page
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
        const start = (state.page - 1) * 9
        const end = (state.page) * 9
        return getters.sortedProducts
            .filter(product => product.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        mutations.setPages(state, sortedAndSearchedAllProducts.length);
        // this.mutations.setPages(sortedAndSearchedAllProducts.length)
        const sortedAndSearchedPageProducts = sortedAndSearchedAllProducts.slice(start, end)
        return sortedAndSearchedPageProducts

    }
}