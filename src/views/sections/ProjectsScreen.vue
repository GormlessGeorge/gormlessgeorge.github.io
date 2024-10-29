<template>
    <section class="projects" id="projects">
        <TheContainer>
            <div class="projects__title-wrapper">
                <h2 :class="store.currentColorClass" class="projects__title">Latest <span>projects</span></h2>
                <div class="projects__title-icon">
                    <svg :class="store.currentColorClass" width="39" height="39" viewBox="0 0 39 39" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.25 32.5V6.5H16.25L19.5 9.75H35.75V32.5H3.25Z" fill="none" />
                    </svg>
                </div>
            </div>


            <div class="projects__wrapper fade-in" :class="store.currentColorClass" data-fade-in-time="0.6s">
                <div class="projects__project" :class="store.currentColorClass">
                    <div class="projects__img">
                        <img loading="eager" src="../../assets/img/prj/pearl2.png" alt="project_image">
                    </div>
                    <p class="projects__descr">Multi-page website for a restaurant. Contributed as a front-end
                        developer, utilizing pure vanilla <span>JavaScript</span> to
                        create a seamless and engaging user
                        experience.
                    </p>

                </div>
                <div class="projects__project fade-in" data-fade-in-time="0.8s">
                    <div class="projects__img">
                        <img loading="eager" src="../../assets/img/prj/dsp.png" alt="project_image">
                    </div>
                    <p class="projects__descr">A simple yet functional landing page for English courses, featuring a
                        basic user dashboard. Built to provide an intuitive learning experience, also using vanilla
                        <span>JavaScript</span>.
                    </p>
                </div>
                <div class="projects__project fade-in" data-fade-in-time="1s">
                    <div class="projects__img">
                        <img loading="eager" src="../../assets/img/prj/owl.png" alt="project_image">
                    </div>
                    <p class="projects__descr">Single Page Application (SPA) for a local café with ordering
                        functionality and integrated payment system. Built using <span>Vue</span>, <span>Laravel</span>,
                        and <span>Inertia</span>. Utilizes SSR with Node.
                    </p>
                </div>
            </div>
        </TheContainer>
    </section>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '../../store/portfolio-store';

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

        @include title;

        &-wrapper {
            transform: translateY(-100%);
            display: flex;
            gap: 20px;
            align-items: center;
            justify-content: center;
            @include phone-adp {
                gap:10px;
            }
        }

        &-icon {
            width: 39px;
            height: 39px;
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
        opacity: 0;
        display: flex;
        justify-content: space-between;

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
    }

    &__descr {
        font-size: 1.25rem;
        font-weight: 300;
        @include text-lh;
        @include desktop-adp {
            font-size: 1.125rem;
        }

        @include tablet-landscape-adp {
            font-size: 1rem;
        }

        @include phone-adp {
            display: none;
        }

        span {
            color: var(--primary-color);
            font-weight: 600;
        }
    }

}

div img {
    width: 100%;
    height: 100%;
    object-fit: fill;

    @include tablet-landscape-adp {
        width: 260px;
        height: auto;
    }
}
</style>
