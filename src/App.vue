<template>
  <Layout>
    <template #nav>
      <router-link to="/" class="flex items-center hover:bg-gray-700 transition-all ease p-2 rounded hover:text-white mr-5">Home</router-link>
      <random-button></random-button>
    </template>

    <template #main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component"></component>
        </transition>
      </router-view>
    </template>
  </Layout>
</template>

<script>
import Layout from './components/Layout.vue';
import RandomButton from './components/RandomButton.vue';

export default {
  components: {
    Layout,
    RandomButton,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Raleway&display=swap");

.fade-enter-active,.fade-leave-active{
  transition: 0.4s ease all;
}

.fade-enter-from,.fade-leave-to{
  opacity: 0;
}

.fade-enter-to,.fade-leave-from{
  opacity:1
}

body,
html {
  height: 100vh;
}

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

q {
  quotes: auto;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
