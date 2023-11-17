import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faUser,
    faBasketShopping,
    faHeart,
    faCircleXmark,
    faAngleDown,
    faCartShopping,
    faAnglesRight,
    faCirclePlay,
    faPlay,
    faWifi,
    faStar,
    faPaperPlane,
 
 } from '@fortawesome/free-solid-svg-icons'


 import {
    faClock,
    faEye,
    faCalendar,
    faCopyright
} from '@fortawesome/free-regular-svg-icons'

import {
    faFacebook,
    faInstagram,
    faTwitch,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'


 library.add(
    faUser,
    faBasketShopping,
    faHeart,
    faCircleXmark,
    faAngleDown,
    faCartShopping,
    faAnglesRight,
    faCirclePlay,
    faPlay,
    faWifi,
    faStar,
    faClock,
    faEye,
    faCalendar,
    faFacebook,
    faInstagram,
    faTwitch,
    faYoutube,
    faCopyright,
    faPaperPlane
    
)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
