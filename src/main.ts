import { createApp } from 'vue'
import { createPinia, storeToRefs } from 'pinia';
import { createI18n } from 'vue-i18n'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue';
import ru from './locales/ru.json';
import en from './locales/en.json';
import { usePortfolioStore } from './store/portfolio-store';
import './style.css'
import TheContainer from './views/components/TheContainer.vue';
import TheButton from './views/components/TheButton.vue';



const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
pinia.use(piniaPluginPersistedstate);

app.component('TheContainer', TheContainer);
app.component('TheButton', TheButton);

const store = usePortfolioStore();
const {locale} = storeToRefs(store);

const i18n = createI18n({
    locale: locale.value,
    fallbackLocale: 'ru',
    messages: {
        ru,
        en
    },
    warnHtmlInMessage: 'off'
});

app.use(i18n);

app.mount('#app');



document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const fadeInTime = entry.target.dataset.fadeInTime;
                entry.target.style.animation = `slide-up ${fadeInTime} linear 0.3s forwards`;
            }
        });
    });


    const elements = document.querySelectorAll('.fade-in');

    elements.forEach((el) => {
        observer.observe(el);
    });
});