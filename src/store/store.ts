import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  getters: {
    getCounter: (state) => "Count is " + state.count,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
  persist: true,
});
