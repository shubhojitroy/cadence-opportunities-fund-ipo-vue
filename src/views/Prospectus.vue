<template>
  <div class="home">
    <ProspectusPage />
  </div>
</template>

<script>
// @ is an alias to /src

import ProspectusPage from '../prospectus/ProspectusPage.vue';

export default {
  name: 'prospectus',
  components: {
    ProspectusPage,
  },
};
</script>

