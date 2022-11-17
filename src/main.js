import { createApp } from 'vue'
import App from './App.vue'
import GlobalButton from './global/GlobalButton.vue';

createApp(App)
  .component('GlobalButton', GlobalButton)
  .mount('#app')
