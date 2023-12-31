import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FavoriteView from './views/FavoriteView.vue'
import PeoplesView from './views/PeoplesView.vue'
import PeoplesProfileView from './views/PeoplesProfileView.vue'
import BaseTable from './components/BaseTable.vue'
import BaseButton from './components/BaseButton.vue'
import BaseInputSearch from './components/BaseInputSearch.vue'

const app = createApp(App)
  .use(router)
  .use(store)
  .component('FavoriteView', FavoriteView)
  .component('PeoplesView', PeoplesView)
  .component('PeoplesProfileView', PeoplesProfileView)
  .component('BaseTable', BaseTable)
  .component('BaseButton', BaseButton)
  .component('BaseInputSearch', BaseInputSearch)

  .mount('#app')
