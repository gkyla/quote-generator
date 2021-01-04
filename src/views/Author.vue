<template>
  <loading-state v-if="isLoading" />
  <div id="author-page" v-else>
    <h1 class="text-3xl font-bold text-left sm:pl-16 md:pl-28 pt-10 mb-14 md:mb-24">{{ authorQuotes[0].quoteAuthor }}</h1>
    <div id="author-card" v-for="quote in authorQuotes" :key="quote._id">
      <quote-card :quote="quote" :class="[authorQuotes.length > 1 ? 'mb-16' : '' ]"></quote-card>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import QuoteCard from '../components/QuoteCard.vue';
import LoadingState from '../components/LoadingState.vue';

export default {
  components: {
    QuoteCard,
    LoadingState
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const currentRouteURL = router.currentRoute.value.params.author;
    onBeforeMount(() => store.dispatch('author/generateAuthorQuotes', currentRouteURL));

    const isLoading = computed(() => store.state.author.loading);
    const authorQuotes = computed(() => store.state.author.authorQuotes);

    return {
      authorQuotes,
      isLoading
    };
  }
};
</script>

<style>

</style>
