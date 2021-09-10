<template>
  <div>

    <v-top-bar/>
    <v-navbar/>

    <div class="py-16">
      <carousel :per-page="1" :mouse-drag="true">
        <slide>
          Slide 1 Content
        </slide>
        <slide>
          Slide 2 Content
        </slide>
      </carousel>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VTopBar from '~/components/Elements/TopBar'
import VNavbar from '../components/Elements/Navbar.vue'
import { Carousel, Slide } from 'vue-carousel';

export default {
  layout: 'basic',

  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName
  }),

  components:{
    VTopBar, VNavbar, Carousel
  },

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>