<template>
    <section class="projects" id="projects">
        <TheContainer>
            <div class="projects__title-wrapper">
                <h2 :class="store.currentColorClass" v-html="formattedTitle" class="projects__title"></h2>
                <div class="projects__title-icon">
                    <svg :class="store.currentColorClass" width="39" height="39" viewBox="0 0 39 39" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.25 32.5V6.5H16.25L19.5 9.75H35.75V32.5H3.25Z" fill="none" />
                    </svg>
                </div>
            </div>


            <div class="projects__wrapper fade-in" :class="store.currentColorClass" data-fade-in-time="0.6s">
                <div class="projects__project" :class="store.currentColorClass">
                    <div>
                        <img class="projects__project-img" src="../../assets/img/prj/pearl2.png" alt="project_image">
                    </div>
                    <p class="projects__project-descr" v-html="formattedFirstProject">
                    </p>

                </div>
                <div class="projects__project fade-in" data-fade-in-time="0.8s">
                    <div>
                        <img class="projects__project-img" src="../../assets/img/prj/dsp.png" alt="project_image">
                    </div>
                    <p class="projects__project-descr" v-html="formattedSecondProject">
                    </p>
                </div>
                <div class="projects__project fade-in" data-fade-in-time="1s">
                    <div class="projects__project-img">
                        <img class="projects__project-img" src="../../assets/img/prj/owl.png" alt="project_image">
                    </div>
                    <p class="projects__project-descr" v-html="formattedThirdProject">
                    </p>
                </div>
            </div>
        </TheContainer>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePortfolioStore } from '../../store/portfolio-store';
import { useI18n } from 'vue-i18n';
const store = usePortfolioStore();


const { t } = useI18n();
const formattedTitle = computed(() => { return t('projectsScreen.title'); });
const formattedFirstProject = computed(() => { return t('projectsScreen.firstProject'); });
const formattedSecondProject = computed(() => { return t('projectsScreen.secondProject'); });
const formattedThirdProject = computed(() => { return t('projectsScreen.thirdProject'); });
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

        @include title;

        &-wrapper {
            transform: translateY(-100%);
            display: flex;
            gap: 20px;
            align-items: center;
            justify-content: center;

            @include phone-adp {
                gap: 10px;
            }
        }

        &-icon {
            width: 40px;
            height: 40px;
            align-self: center;
            margin-top: 5px;

            svg {
                width: 100%;
                height: 100%;

                path {
                    transition: all 1s;
                    fill: var(--primary-color);
                }
            }

            @include desktop-adp {
                width: 28px;
            }

            @include tablet-landscape-adp {
                width: 26px;
            }

            @include phone-adp {
                width: 24px;
                margin-top: 0;
            }
        }


    }

    &__wrapper {
        display: flex;
        justify-content: space-between;
        opacity: 0;

        @include tablet-landscape-adp {
            flex-direction: column;
            gap: 30px;
        }

        @include tablet-landscape-adp {
            gap: 10px;
        }
    }

    &__project {
        width: 367px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        text-align: center;
        align-items: center;

        @include desktop-adp {
            width: 300px;
        }

        @include tablet-landscape-adp {
            width: 100%;
            flex-direction: row;
        }

        @include phone-adp {
            flex-direction: column;
        }

        &-descr {
            font-size: 20px;
            font-weight: 300;
            @include text-lh;

            @include desktop-adp {
                font-size: 18px;
            }

            @include tablet-landscape-adp {
                font-size: 16px;
            }

            @include tablet-adp {
                font-size: 14px;
            }

            @include phone-adp {
                display: none;
            }

            span {
                color: var(--primary-color);
                font-weight: 600;
            }
        }

        &-img {
            width: 100%;
            height: 100%;
            object-fit: fill;

            @include tablet-landscape-adp {
                width: 260px;
                height: auto;
            }
        }
    }
}
</style>
