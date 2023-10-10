import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Favorite from './views/Favorite.vue'
import Peoples from './views/peoples/Peoples.vue'
import PeopleId from './views/peoples/peopleId/PeopleId.vue'

const app = createApp(App)
  .use(router)
  .component('Favorite', Favorite)
  .component('Peoples', Peoples)
  .component('PeopleId', PeopleId)
  .mount('#app')
