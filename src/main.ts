import { createApp } from 'vue'
import './style.css'
import TheContainer from './components/TheContainer.vue';
import TheButton from './components/TheButton.vue';

import App from './App.vue'

const app = createApp(App);
app.component('TheContainer', TheContainer);
app.component('TheButton', TheButton);

app.mount('#app');
