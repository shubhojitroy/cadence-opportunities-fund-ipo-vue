<template>
    <footer class="footer">
        <div class="container">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <p class="subtitle is-7">
                            <strong>©</strong> Boardroom Pty Limited
                        </p>
                    </div>
                </div>
                <div class="level-right">
                    <p class="level-item">
                        <span class="subtitle is-7">
                            ABN 14 003 209 836 |
                            <a @click="isCardModalActive = true">Contact Us</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <!-- <modal-contact-page /> -->
        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        Telephone: 1300 737 760<br>
                        Facsimile: 1300 653 459
                    </div>
                </div>
            </div>
        </b-modal>
    </footer>
</template>

<script>
// import ModalContactPage from '../modal/ModalContactPage.vue';

export default {
  name: 'FooterBanner',
  //   components: {
  //     ModalContactPage,
  //   },
  data() {
    return {
      isCardModalActive: false,
    };
  },
};
</script>

<style scoped lang="scss">

</style>
