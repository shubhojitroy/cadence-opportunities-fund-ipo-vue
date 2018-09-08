<template>
  <div id="app">
    <main>
      <header-banner />
      <router-view />
      <footer-banner />
    </main>
  </div>
</template>

<script>
import HeaderBanner from './components/HeaderBanner.vue';
import FooterBanner from './components/FooterBanner.vue';

export default {
  name: 'app',
  components: {
    HeaderBanner,
    FooterBanner,
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
@import '../src/assets/scss/main.scss';
</style>
