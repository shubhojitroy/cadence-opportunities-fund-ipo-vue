<template>
  <div class="home">
    <HomePage />
  </div>
</template>

<script>
// @ is an alias to /src

import HomePage from '../home/HomePage.vue';

export default {
  name: 'home',
  components: {
    HomePage,
  },
};
</script>

