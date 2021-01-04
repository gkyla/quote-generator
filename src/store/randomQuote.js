const RANDOM_QUOTE = 'https://quote-garden.herokuapp.com/api/v3/quotes/random';

const randomQuote = {
  namespaced: true,
  state: {
    currentQuote: null,
    isLoading: false,
    firstTime: true,
  },

  mutations: {
    setCurrentQuote(state, { data }) {
      state.currentQuote = data;
      state.authorQuotes = null;

      if (state.firstTime) {
        state.firstTime = false;
      }
    },
    setLoading(state, loading) {
      state.isLoading = loading;
    }
  },

  actions: {
    async generateRandomQuote(ctx) {
      ctx.commit('setLoading', true);
      const response = await fetch(RANDOM_QUOTE);
      const data = await response.json();
      ctx.commit('setCurrentQuote', { data: data.data });
      ctx.commit('setLoading', false);
    },
  }

};

export default randomQuote;
