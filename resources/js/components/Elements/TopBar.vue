<template>
  <div class="bg-black p-4 text-white">
    <div class="container mx-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between">
      <p class="text-base">{{$t('slogan')}}</p>
      <div class="inline-flex space-x-4 uppercase">
        <router-link :to="{ name: 'login' }">{{$t('login')}}</router-link>
        <p class="cursor-pointer">FAQS</p>
        <drop-down ref="dropdown">
          <div slot="trigger" class="text-white text-base">{{locales[locale]}}</div>

          <div slot="menu">
            <div v-for="(value, key) in locales" :key="key" class="text-black text-base px-4 py-2  cursor-pointer hover:bg-gray-50" href="#"
              @click.prevent="setLocale(key)"
            >
              {{ value }}
            </div>
          </div>

        </drop-down>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from './DropDown.vue'
import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'

export default {
  components: { DropDown },
  
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),
  
  methods: {
    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)
        this.$store.dispatch('lang/setLocale', { locale })
      }
      this.$refs.dropdown.hide();
    }
  }

}
</script>