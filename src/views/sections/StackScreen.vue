<template>
  <section class="stack" id="stack">
    <TheContainer>
      <div class="stack__main_wrapper fade-in" data-fade-in-time="0.6s">
        <div class="stack__tabs_wrapper">
          <div class="stack__tabs">
            <div class="stack__tab_title" @click="selectedTab = 'tab1'"
              :class="{ 'stack__tab_title-active': selectedTab === 'tab1', [currentColorClass]: selectedTab === 'tab1' }">
              Frontend</div>
            <p class="stack__delimiter"
              :class="{ 'stack__delimiter-active': selectedTab === 'tab1' || selectedTab === 'tab2', [currentColorClass]: selectedTab === 'tab1' || selectedTab === 'tab2' }">
              |</p>
            <div class="stack__tab_title" @click="selectedTab = 'tab2'"
              :class="{ 'stack__tab_title-active': selectedTab === 'tab2', [currentColorClass]: selectedTab === 'tab2' }">
              Backend</div>
            <p class="stack__delimiter"
              :class="{ 'stack__delimiter-active': selectedTab === 'tab2' || selectedTab === 'tab3', [currentColorClass]: selectedTab === 'tab2' || selectedTab === 'tab3' }">
              |</p>
            <div class="stack__tab_title" @click="selectedTab = 'tab3'"
              :class="{ 'stack__tab_title-active': selectedTab === 'tab3', [currentColorClass]: selectedTab === 'tab3' }">
              Tools</div>
          </div>

          <div class="stack__tab_content">
            <transition name="fade" mode="out-in">
              <div v-if="selectedTab === 'tab1'" key="tab1" class="stack__tab">
                <div class="stack__icon" @click="store.applyJsColor">
                  <img src="@/assets/icons/tech_icons/png/js_icon.png" alt="javascript_icon" />
                </div>
                <div class="stack__icon" @click="store.applyTsColor">
                  <img src="@/assets/icons/tech_icons/png/ts_icon.png" alt="typescript_icon" />
                </div>
                <div class="stack__icon" @click="store.applyVueColor">
                  <img src="@/assets/icons/tech_icons/png/vue_icon.png" alt="vue_icon" />
                </div>
                <div class="stack__icon" @click="store.applyHtmlColor">
                  <img src="@/assets/icons/tech_icons/png/html_icon.png" alt="html_icon" />
                </div>
                <div class="stack__icon" @click="store.applyCssColor">
                  <img src="@/assets/icons/tech_icons/png/css_icon.png" alt="css_icon" />
                </div>
                <div class="stack__icon" @click="store.applySassColor">
                  <img src="@/assets/icons/tech_icons/png/sass_icon.png" alt="sass_icon" />
                </div>
                <div class="stack__icon" @click="store.applyInertiaColor">
                  <img src="@/assets/icons/tech_icons/png/inertia_icon.png" alt="inertia_icon" />
                </div>
                <div class="stack__icon" @click="store.applyViteColor">
                  <img src="@/assets/icons/tech_icons/png/vite_icon.png" alt="vitejs_icon" />
                </div>

                <div class="stack__icon">
                  And more!
                </div>
              </div>


              <div v-else-if="selectedTab === 'tab2'" key="tab2" class="stack__tab">
                <div class="stack__icon" @click="store.applyJavaColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/java_icon.svg" alt="java_icon" />
                </div>
                <div class="stack__icon" @click="store.applyKotlinColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/kotlin_icon.svg" alt="kotlin_icon" />
                </div>
                <div class="stack__icon" @click="store.applyPhpColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/php_icon.svg" alt="php_icon" />
                </div>
                <div class="stack__icon" @click="store.applyLaravelColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/laravel_icon.svg" alt="laravel_icon" />
                </div>
                <div class="stack__icon" @click="store.applyMysqlColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/mysql_icon.svg" alt="mysql_icon" />
                </div>
                <div class="stack__icon" @click="store.applyPostgresColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/postgresql_icon.svg" alt="postgresql_icon" />
                </div>
                <div class="stack__icon" @click="store.applyRabbitColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/rabbit_icon.svg" alt="rabbitmq_icon" />
                </div>
                <div class="stack__icon" @click="store.applyRedisColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/redis_icon.svg" alt="redis_icon" />
                </div>
                <div class="stack__icon">
                  And more!
                </div>
              </div>

              <div v-else-if="selectedTab === 'tab3'" key="tab3" class="stack__tab">
                <div class="stack__icon" @click="store.applyFigmaColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/figma_icon.svg" alt="figma_icon" />
                </div>
                <div class="stack__icon" @click="store.applyPsColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/ps_icon.svg" alt="photoshop_icon" />
                </div>
                <div class="stack__icon" @click="store.applyVscodeColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/vscode_icon.svg" alt="vscode_icon" />
                </div>
                <div class="stack__icon" @click="store.applyIjColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/ij_icon.svg" alt="ij_icon" />
                </div>
                <div class="stack__icon" @click="store.applyWebstormColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/webstorm_icon.svg" alt="webstorm_icon" />
                </div>
                <div class="stack__icon" @click="store.applyPhpstormColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/phpstorm_icon.svg" alt="phpstorm_icon" />
                </div>
                <div class="stack__icon" @click="store.applyGitColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/git_icon.svg" alt="git_icon" />
                </div>
                <div class="stack__icon" @click="store.applyPostmanColor">
                  <img loading="lazy" src="@/assets/icons/tech_icons/postman_icon.svg" alt="postman_icon" />
                </div>
                <div class="stack__icon">
                  And more!
                </div>
              </div>
            </transition>
          </div>
        </div>

        <div class="stack__descr">
          <div :class="store.currentColorClass" class="stack__light"></div>
          <div class="stack__title-wrapper">
            <h2 :class="store.currentColorClass" class="stack__title">Tech <span>stack</span></h2>
            <svg :class="store.currentColorClass" width="31" height="33" viewBox="0 0 31 33" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30.866 10.706L15.5 0.185791L0.134033 10.706L15.5 21.2251L30.866 10.706ZM15.5 23.5724L1.93656 14.6292L0.134033 16.5L15.5 27.019L30.866 16.5L29.0391 14.589L15.5 23.5724ZM15.5 29.3688L1.93656 20.4256L0.134033 22.2964L15.5 32.8154L30.866 22.2964L29.0391 20.3854L15.5 29.3688Z"
                fill="#F53399" />
            </svg>

          </div>

          <transition name="fade" mode="out-in">
            <p v-if="selectedTab === 'tab1'" class="stack__text" :class="store.currentColorClass">I work with a robust
              stack of frontend technologies.
              Starting with <span>JavaScript</span>
              for dynamic and interactive content, <span>TypeScript</span> adds type
              safety and efficiency.
              <span>Vue.js</span> is my go-to for building user interfaces.
              <br><br><span :class="store.currentColorClass">HTML</span> and <span
                :class="store.currentColorClass">CSS</span> lay the foundation
              for structure and design,
              with <span :class="store.currentColorClass">Sass</span> enhancing the maintainability and
              flexibility.<br><br> <span :class="store.currentColorClass">Inertia.js</span> paired with Laravel
              simplifies
              single-page application development, while <span :class="store.currentColorClass">Vite</span> ensures a
              fast and efficient build process.
            </p>
            <p v-else-if="selectedTab === 'tab2'" class="stack__text" :class="store.currentColorClass">
              I have a solid foundation in backend technologies. While I have extensive experience with
              <span>Java</span> and <span>Kotlin</span>,
              my current focus is primarily on <span>PHP</span> and the <span>Laravel</span> framework, which I use
              extensively for most of my
              projects.<br><br><span>MySQL</span> serves as my primary database system, and I have a working knowledge
              of <span>PostgreSQL</span>, which
              I can utilize when specific project requirements call for it. <br><br>Additionally, I’m familiar with
              <span>RabbitMQ</span>
              for
              message queuing and <span>Redis</span> for caching.
            </p>
            <p v-else-if="selectedTab === 'tab3'" class="stack__text" :class="store.currentColorClass">
              <span>Figma</span> and <span>Photoshop</span> assist me in handling various design tasks. For coding, I
              rely on <span>Visual Studio Code</span>
              for lighter projects.<br><br> When it comes to more demanding tasks, I utilize <span>Intellij IDEA</span>,
              <span>WebStorm</span>, and
              <span>PHPStorm</span>, each tailored for specific programming languages and needs. <br><br>
              <span>Git</span> simplifies version control,
              making collaboration more efficient, while <span>Postman</span> is great for testing APIs.
            </p>
          </transition>
        </div>

      </div>
    </TheContainer>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePortfolioStore } from '../../store/portfolio-store';
import { storeToRefs } from 'pinia';
const store = usePortfolioStore();
const { currentColorClass } = storeToRefs(store);
const selectedTab = ref('tab1');
</script>

<style scoped lang="scss">
.stack {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100dvh;
  overflow: auto;

  &__main_wrapper {
    transform: translateY(100px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    opacity: 0;

    @include tablet-landscape-adp {
      flex-direction: column-reverse;
      align-items: center;
      gap: 1.875rem;
    }

    @include phone-adp {
      gap: 1rem;
    }
  }

  &__tabs_wrapper {
    width: 50%;
    display: flex;
    flex-direction: column;

    @include tablet-landscape-adp {
      width: 400px;
    }

    @include phone-adp {
      width: unset;
      align-items: center;
    }
  }

  &__tabs {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 20px;

    @include phone-adp {
      gap: 5px;
    }
  }

  &__tab_title {
    align-content: center;
    transition: all 1s;
    cursor: pointer;
    width: 160px;
    color: var(--text-color);
    text-align: center;
    font-weight: 600;
    font-size: 1.25rem;

    @include desktop-adp {
      font-size: 1.125rem;
    }

    @include tablet-landscape-adp {
      font-size: 1rem;
      width: 105px;
    }

    @include phone-adp {
      font-size: 0.875rem;
      width: 80px;
    }

    &-active {
      transition: all 1s;
      color: var(--primary-color);
    }
  }

  &__delimiter {
    align-self: center;
    color: var(--text-color);
    transition: all 1s;

    &-active {
      transition: all 1s;
      color: var(--primary-color);
    }
  }

  &__tab {
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
    margin-top: 45px;
    padding-left: 5%;

    @include desktop-adp {
      gap: 60px;
    }

    @include tablet-landscape-adp {
      margin-top: 30px;
      gap: 50px;
      padding-left: 0;
    }

    @include phone-adp {
      margin-top: 15px;
      gap: 20px;
      justify-content: center;
    }

  }

  &__icon {
    transition: transform 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 120px;
    backdrop-filter: blur(4px);
    background: var(--stack-icon-bg);
    color: var(--text-color);

    @include desktop-adp {
      height: 100px;
      width: 100px;
    }

    @include phone-adp {
      height: 50px;
      width: 50px;
    }

    img {
      max-width: 100%;
      height: auto;

      @include desktop-adp {
        max-width: 60%
      }

      @include tablet-landscape-adp {
        max-width: 50%
      }
    }

    &:hover {
      transition: transform 0.5s linear;
      transform: scale(1.05);
      cursor: pointer;
    }

    &:last-child {
      &:hover {
        transform: none;
        cursor: default;
      }
    }

    @include phone-adp {
      font-size: .625rem;
    }

  }

  &__descr {
    width: 50%;
    position: relative;

    @include tablet-landscape-adp {
      width: unset;
    }
  }

  &__title {
    display: block;
    width: fit-content;
    // margin: 0 auto;
    @include title;

    @include desktop-adp {
      margin-top: 10px;
    }

    
    &-wrapper {
      display: flex;
      gap: 20px;
      align-items: baseline;
      justify-content: center;

      @include tablet-landscape-adp {
        margin-bottom: 20px;
      }

      svg {
        path {
          transition: all 1s;
          fill: var(--primary-color);
        }

        @include desktop-adp {
          width: 28px;
        }

        @include tablet-landscape-adp {
          width: 26px;
          margin-top: 5px;
          align-self: center;
        }
      }
    }
  }

  &__light {
    transition: all 1s;
    top: 60px;
    z-index: -5;
    position: absolute;
    border-radius: 100%;
    width: 500px;
    height: 500px;
    background-color: var(--light-color);
    filter: blur(50px);

    @include desktop-adp {
      width: 450px;
      height: 450px;
    }

    @include tablet-landscape-adp {
      display: none;
    }

  }


  &__text {
    display: block;
    margin: 0 auto;
    margin-top: 40px;
    width: 470px;
    line-height: 2.2rem;
    font-weight: 300;
    font-size: 1.25rem;
    color: var(--text-color);

    @include desktop-adp {
      font-size: 1.125rem;
      width: 450px;
    }

    @include tablet-landscape-adp {
      font-size: 1rem;
      width: 90%;
      margin-top: 0;
      text-align: center;

      br {
        display: none;
      }
    }

    @include phone-adp {
      font-size: 0.875rem;
      line-height: 28px;
    }



    span {
      transition: all 1s;
      color: var(--primary-color);
      font-weight: 600;
    }


  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

p {
  color: white;
}
</style>