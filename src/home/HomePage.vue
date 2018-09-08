<template>
    <div class="home">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Cadence Opportunities Fund
                </p>
            </header>
            <div class="card-content">
                <div class="content">

                    <hr>
                    <div class="level">
                        <div class="level-left">
                            <a href="../../public/Media-Release_June-2018-results-Full-Year-Dividend-Final.pdf" class="button is-primary" target="_blank" @click="hrefIsClicked">
                                DOWNLOAD PDF&nbsp;&#x2913;
                            </a>
                        </div>
                        <div class="level-right">
                            <router-link to="/login" :disabled="disabled" class="button is-primary" >
                                PROCEED&nbsp;&#x27A4;
                            </router-link>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  data() {
    return {
      disabled: true,
    };
  },
  methods: {
    hrefIsClicked() {
      this.disabled = false;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
