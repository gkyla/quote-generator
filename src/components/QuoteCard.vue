<template>
      <div id="qoute-text" class="p-5 border-l-8 border-yellow-400 my-auto text-left">
        <q class="inline-block text-xl md:ml-20  md:text-3xl leading-8 font-bold inline-block">
          <p class="inline mx-2">{{ quote.quoteText }}</p>
        </q>
         <i class="text-gray-400 md:ml-20 text-lg mt-5 block"> {{ quote.quoteGenre}}</i>
      </div>
</template>

<script>
export default {
  props: {
    quote: Object,
  }
};
</script>
