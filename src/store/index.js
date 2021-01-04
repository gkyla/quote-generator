import { createStore } from 'vuex';
import author from './authorQuote';
import random from './randomQuote';

export default createStore({
  modules: {
    author,
    random
  }
});
