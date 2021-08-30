import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/free-regular-svg-icons'

import {
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'

// import {
//   faGithub
// } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faAngleDown
)

Vue.component('Fa', FontAwesomeIcon)