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
                        <!-- <form novalidate>
                            <b-field label="Country of Primary Residence">
                                <b-input v-model="co" type="text"
                                placeholder="Select Country of Primary Residence">
                                </b-input>
                            </b-field>
                            <div class="control">
                                <router-link to="/prospectus" tag="button" class="button is-primary">
                                    Submit&nbsp;&#x2714;
                                </router-link>
                            </div>
                        </form> -->
                        <form novalidate @submit.prevent="submitForm">
                            <b-field label="Country of Primary Residence" :type="countryType" :message="countryMessage">
                                <b-autocomplete v-model="country" field="name" :placeholder="placeholder" :data="filteredCountries" open-on-focus keep-first
                                                icon="earth"
                                                @select="onSelect"
                                                @focus="focusSelect"
                                                @blur="leaveSelect">
                                <template slot="empty">No results found</template>
                                </b-autocomplete>
                            </b-field>
                            <br>
                            <div class="control">
                                <button type="submit" class="button is-primary">
                                    Submit&nbsp;&#x2714;
                                </button>
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
import { mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import { countries } from '../assets/js/countries';

const placeholder = 'Select a Country';

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
      country2: '',
      selected: null,
      placeholder,
      countries: countries.items,
    };
  },
  validations: {
    country: {
      required,
    },
  },
  computed: {
    filteredCountries() {
      return this.countries.filter(option => option.name
        .toString()
        .toLowerCase()
        .indexOf(this.country.toLowerCase()) >= 0);
    },
    countryType() {
      return this.$v.country.$error ? 'is-danger' : '';
    },
    countryMessage() {
      return this.$v.country.$error ? 'Country is required' : '';
    },
  },
  mounted() {
    this.clearData();
  },
  methods: {
    ...mapActions(['clearData']),
    submitForm() {
      this.$v.$touch();
      if (!this.$v.$error) {
        const validCountry = this.selected.code === 'AUS' || this.selected.code === 'NZL' ? '/prospectus' : '/eligibility-notice';
        this.$router.push(validCountry);
      }
    },
    clearSelect() {
      this.placeholder = this.country;
      this.country = '';
    },
    focusSelect() {
      this.placeholder = this.country;
      this.country = '';
    },
    onSelect(option) {
      this.selected = option;
    },
    leaveSelect() {
      if (this.country === '' && this.placeholder !== placeholder) {
        this.country2 = this.placeholder;
      }
      const vm = this;
      setTimeout(() => {
        if (vm.country === '') { vm.country = vm.country2; }
      }, 200);
    },
  },
};
</script>

<style scoped lang="scss">

</style>
