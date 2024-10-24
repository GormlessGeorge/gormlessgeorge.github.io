<template>
    <section class="projects" id="projects">
        <TheContainer>
            <h2 :class="store.currentColorClass" class="projects__title">Some of the <span>projects</span></h2>

            <div class="projects__wrapper fade-in" data-fade-in-time="0.6s">
                <div class="projects__project">
                    <div class="projects__img">
                        <img src="../../assets/img/prj/pearl2.png" alt="project_image">
                    </div>
                    <p class="projects__descr">Lorem ipsum dolor sit amet consectetur. Egestas libero nascetur nibh
                        dictumst quis id curabitur. Tellus turpis est turpis nibh senectus nisi tincidunt nibh. Lectus
                        vel cras risus vestibulum. </p>
                
                </div>
                <div class="projects__project fade-in" data-fade-in-time="0.8s">
                    <div class="projects__img">
                        <img src="../../assets/img/prj/dsp.png" alt="project_image">
                    </div>
                    <p class="projects__descr">Lorem ipsum dolor sit amet consectetur. Egestas libero nascetur nibh
                        dictumst quis id curabitur. Tellus turpis est turpis nibh senectus nisi tincidunt nibh. Lectus
                        </p>
                </div>
                <div class="projects__project fade-in" data-fade-in-time="1s">
                    <div class="projects__img">
                        <img src="../../assets/img/prj/owl.png" alt="project_image">
                    </div>
                    <p class="projects__descr">Lorem ipsum dolor sit amet consectetur. Egestas libero nascetur nibh
                        dictumst quis id curabitur. Tellus turpis est </p>
                </div>
            </div>
        </TheContainer>
    </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usePortfolioStore } from '../../store/portfolio-store';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const store = usePortfolioStore();





</script>

<style scoped lang="scss">

.projects {
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow: hidden;

    &__title {
        width: fit-content;
        display: block;
        margin: 0 auto;
        // margin-bottom: 50px;
        transform: translateY(-100%);
        font-size: 48px;
        color: var(--text-color);
        font-weight: 700;

        span {
            color: var(--primary-color);
            text-shadow: 5px 5px 20px var(--hover-color);
        }
    }

    &__wrapper {
        opacity: 0;
        display: flex;
        justify-content: space-between;
        transform: translateY(30px);
    }

    &__project {
        width: 367px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
}

div img {
    width: 100%;
    height: 100%;
    object-fit: fill;
}




</style>
