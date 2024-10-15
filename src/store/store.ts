import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, subscriptions: [] }),
  getters: {
    getCounter: (state) => "Count is " + state.count,
  },
  actions: {
    increment() {
      this.count++;
    },
    async loadSubscriptions()  {
      try {
        const response = await fetch('../subscribe.json')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        this.subscriptions = data
      } catch (error) {
        console.error('Failed to load subscriptions:', error)
      }
    }
  },
  persist: true,
});
