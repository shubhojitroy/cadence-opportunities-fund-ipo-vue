<template>
    <div class="home">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Please select your country of origin
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>
                        Due to legal restrictions, access to these webpages is only intended for access by persons within Australia and New Zealand. These webpages do not constitute an offer of securities in any place in which, or to any person to whom, it would not be lawful to make such an offer.
                    </p>
                    <hr>
                    <div class="box">
                        <form novalidate>
                            <b-field label="Country of Primary Residence">
                                <b-input v-model="co" type="text" maxlength="4"
                                placeholder="Select Country of Primary Residence">
                                </b-input>
                            </b-field>
                            <div class="control">
                                <router-link to="/prospectus" tag="button" class="button is-primary">
                                    Submit&nbsp;&#x2714;
                                </router-link>
                            </div>
                        </form>
                    </div>
                </div>
                <hr>
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
  components: {
  },
  data() {
    return {
      name: '',
      country: '',
    };
  },
};
</script>

<style scoped lang="scss">

</style>
