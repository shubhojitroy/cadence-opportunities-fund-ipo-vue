<template>
  <div class="home">
    <EligibilityNoticePage />
  </div>
</template>

<script>
// @ is an alias to /src

import EligibilityNoticePage from '../eligibility-notice/EligibilityNoticePage.vue';

export default {
  name: 'eligibility-notice',
  components: {
    EligibilityNoticePage,
  },
};
</script>
