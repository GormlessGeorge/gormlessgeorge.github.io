import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import TheContainer from './views/TheContainer.vue';
import TheButton from './views/TheButton.vue';
import App from './App.vue';



// document.addEventListener("DOMContentLoaded", function () {
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('fade-in');
//             }
//         });
//     });

//     const stackScreen = document.querySelector('.stack__main_wrapper');
//     const projectsScreen = document.querySelector('.projects__wrapper');
//     observer.observe(stackScreen);
//     observer.observe(projectsScreen);
// });

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


const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.component('TheContainer', TheContainer);
app.component('TheButton', TheButton);

app.use(pinia);
app.mount('#app');
