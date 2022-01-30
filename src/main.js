import { createApp } from 'vue'
import App from './App.vue'

let app = createApp(App)

import store from './store.js'

/* fontawesome */
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(fab, far, fas)

app.use(store);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app');