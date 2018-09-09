<template>
    <nav class="navbar header has-shadow" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-menu is-hidden-touch">
                <div class="navbar-start logo">
                    <a class="" href="/" title="Cadence Opportunities Fund">
                        <img :src="availableParts.logos[selectedLogosIndex].src"
                        alt="Cadence Opportunities Fund" width="160">
                    </a>
                </div>
                <div class="navbar-end">
                    <!-- navbar items -->
                    <div class="navbar-item">
                        <p class="subtitle is-7">
                            Offer Information Line<br>
                            Telephone: 1300 737 760<br>
                            Facsimile: 1300 653 459
                        </p>
                    </div>
                </div>
            </div>

            <div class="level is-hidden-desktop">
                <div class="level-left logo">
                    <div class="level-item">
                        <a class="" href="/" title="Cadence Opportunities Fund">
                            <img :src="availableParts.logos[selectedLogosIndex].src"
                            alt="Cadence Opportunities Fund" width="160">
                        </a>
                    </div>
                </div>
                <div class="level-right logo">
                    <p class="level-item">
                        <span class="subtitle is-7">
                            Offer Information Line<br>
                            Telephone: 1300 737 760<br>
                            Facsimile: 1300 653 459
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import availableParts from '../data/parts';

export default {
  name: 'HeaderBanner',
  props: {
    msg: String,
  },
  data() {
    return {
      availableParts,
      selectedLogosIndex: 0,
    };
  },
  methods: {
    selectedLogos() {
      this.selectedLogosIndex += 1;
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
    margin: .5em;
}
</style>
