import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import TheContainer from './components/TheContainer.vue';
import TheButton from './components/TheButton.vue';

import App from './App.vue'

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.component('TheContainer', TheContainer);
app.component('TheButton', TheButton);

app.use(pinia);
app.mount('#app');
