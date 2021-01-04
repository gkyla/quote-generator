<template>
  <button
    class="flex items-center hover:bg-gray-700 transition-all ease p-2 rounded hover:text-white"
    @click="generateRandomQuote"
  >
    random
    <span class="material-icons ml-3"> cached </span>
  </button>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    function generateRandomQuote() {
      router.push({ path: '/' });
      store.dispatch('random/generateRandomQuote');
    }

    return {
      generateRandomQuote,
    };
  },
};
</script>

<style></style>
