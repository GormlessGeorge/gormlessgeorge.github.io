import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import TheContainer from './components/TheContainer.vue';
import TheButton from './components/TheButton.vue';

import App from './App.vue'

const app = createApp(App);
const pinia = createPinia();
app.component('TheContainer', TheContainer);
app.component('TheButton', TheButton);

app.use(pinia);
app.mount('#app');
