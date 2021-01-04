<template>
  <loading-state v-if="isLoading" />
  <div id="home" class="w-full h-full" v-else>
    <div v-for="quote in currentQuote" :key="quote._id" class="w-full h-full flex flex-col">
      <quote-card :quote="quote" />
      <router-link
        class="shadow-md p-12 flex transition-all ease hover:bg-gray-700 items-center text-left hover:text-white mb-40 cursor-pointer"
        :to="`/author/${urlSpliter(quote.quoteAuthor)}`"
      >
          <div>
            <b class="text-xl md:text-3xl">{{ quote.quoteAuthor }}</b>
            <p class="block">{{ quote.quoteGenre }}</p>
          </div>
          <span class="material-icons ml-auto">arrow_forward</span>
      </router-link>
    </div>
  </div>
</template>

<script>

import { computed } from 'vue';
import { useStore } from 'vuex';
import QuoteCard from '../components/QuoteCard.vue';
import LoadingState from '../components/LoadingState.vue';

export default {
  name: 'Home',
  components: {
    QuoteCard,
    LoadingState
  },

  setup() {
    const store = useStore();
    const isFirstTime = computed(() => store.state.random.firstTime);
    const isLoading = computed(() => store.state.random.isLoading);
    const currentQuote = computed(() => store.state.random.currentQuote);

    if (isFirstTime.value) {
      // Initial Fetch (generate the random quote)
      store.dispatch('random/generateRandomQuote');
    }

    // Instead split by space which is the url will be contain some " %20 " (space)
    // We Split it and join by hyphen so instead of "%20" now it will be replaced by "-"
    function urlSpliter(url) {
      return url.split(' ').join('-');
    }

    return {
      currentQuote,
      urlSpliter,
      isLoading
    };
  },
};
</script>
