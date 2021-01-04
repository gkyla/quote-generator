const AUTHOR_QUOTE = 'https://quote-garden.herokuapp.com/api/v3/quotes?author';

const authorQuote = {
  namespaced: true,
  state: {
    authorQuotes: null,
    loading: false,
  },

  mutations: {
    setAuthorQuotes(state, payload) {
      state.authorQuotes = payload.data;
    },
    reset(state) {
      state.authorQuotes = null;
    },
    setLoading(state, loading) {
      state.loading = loading;
    }
  },

  actions: {
    async generateAuthorQuotes({ commit }, author) {
      commit('setLoading', true);
      function parseValidUrl(url) {
        return url.split('-').join(' ');
      }

      const response = await fetch(`${AUTHOR_QUOTE}=${parseValidUrl(author)}`);
      const data = await response.json();
      commit('setAuthorQuotes', data);
      commit('setLoading', false);
    }
  }

};

export default authorQuote;
