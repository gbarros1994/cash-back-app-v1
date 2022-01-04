const state = {
  loadingStatus: "notLoading",
  products: []
}

// COMMIT N' TRACK STATE CHANGES
const mutations = {
  SET_LOADING_STATUS(state, status) {
    state.loadingStatus = status;
  },
  SET_PRODUCTS(state, content) {
    state.products = content;
  },
}

// METHODS LOGICS, CALL MUTATIONS
const actions = {
  async fetchProducts(context) {
    context.commit("SET_LOADING_STATUS", "loading");
    await this.$axios.get('products')
      .then((response) => {
        context.commit("SET_LOADING_STATUS", "notLoading");
        context.commit("SET_PRODUCTS", response.data);
      })
      .catch(() => {
        // TODO: ADICIONAR TRATATIVA PARA RETORNO COM ERRO NA API DO MENU
      });
  },
}

// COMPUTED, FILTERS, MASKS, FORMAT
const getters = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
