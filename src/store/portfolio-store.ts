import { defineStore } from "pinia";
export const usePortfolioStore = defineStore("counter", {
  state: () => ({ isDarkTheme: true, activeSection: 0, currentColorClass: 'color-ij' }),
  getters: {

  },
  actions: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme
    },

    moveUp() {
      this.activeSection++;
    },
    moveDown() {
      this.activeSection--;
    },

    applyJsColor() {
      this.currentColorClass = 'color-js'
    },

    applyTsColor() {
      this.currentColorClass = 'color-ts'
    },

    applyVueColor() {
      this.currentColorClass = 'color-vue'
    },

    applyHtmlColor() {
      this.currentColorClass = 'color-html'
    },

    applyCssColor() {
      this.currentColorClass = 'color-css'
    },

    applySassColor() {
      this.currentColorClass = 'color-sass'
    },

    applyInertiaColor() {
      this.currentColorClass = 'color-inertia'
    },

    applyViteColor() {
      this.currentColorClass = 'color-vite'
    },

    applyJavaColor() {
      this.currentColorClass = 'color-java'
    },

    applyKotlinColor() {
      this.currentColorClass = 'color-kotlin'
    },

    applyPhpColor() {
      this.currentColorClass = 'color-php'
    },

    applyLaravelColor() {
      this.currentColorClass = 'color-laravel'
    },

    applyMysqlColor() {
      this.currentColorClass = 'color-mysql'
    },

    applyPostgresColor() {
      this.currentColorClass = 'color-postgres'
    },

    applyRabbitColor() {
      this.currentColorClass = 'color-rabbit'
    },

    applyRedisColor() {
      this.currentColorClass = 'color-redis'
    },
    applyFigmaColor() {
      this.currentColorClass = 'color-figma'
    },
    applyPsColor() {
      this.currentColorClass = 'color-ps'
    },
    applyWebstormColor() {
      this.currentColorClass = 'color-webstorm'
    },
    applyIjColor() {
      this.currentColorClass = 'color-ij'
    },
    applyVscodeColor() {
      this.currentColorClass = 'color-vscode'
    },
    applyPhpstormColor() {
      this.currentColorClass = 'color-phpstorm'
    },
    applyGitColor() {
      this.currentColorClass = 'color-git'
    },
    applyPostmanColor() {
      this.currentColorClass = 'color-postman'
    },


  },
  persist: true,
});
