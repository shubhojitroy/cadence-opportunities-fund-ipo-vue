<template>
    <div class="home">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Legal Restrictions
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>
                        Unfortunately, legal restrictions prevent us
                        from allowing you access to this part of the website.
                    </p>
                    <p>
                        If you have any questions,
                        please contact us by email by clicking on
                        <a href="mailto:corporateactions@boardroomlimited.com.au">
                            this&nbsp;link
                        </a>.
                    </p>
                    <router-link to="/" class="button is-primary">
                        &#x2190;&nbsp;Back
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'EligibilityNoticePage',
  props: {
    msg: String,
  },
  components: {
  },
};
</script>

<style scoped lang="scss">

</style>
