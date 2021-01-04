<template>
  <div id="default-wrapper" class="flex flex-col justify-between h-screen p-3 overflow-x-auto">
    <nav class="container mx-auto py-5 flex justify-end items-center">
      <slot name="nav"></slot>
    </nav>

    <main class="container mx-auto h-full flex flex-col sm:max-w-4xl">
      <slot name="main"></slot>
      <footer>
        <p class="text-gray-500 text-xl p-3"> Agits Zakky Akmala @ Devchallenge.io</p>
      </footer>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
