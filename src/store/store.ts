import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }),
  getters: {
    getCounter: (state) => "Da coubt is" + state.count,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
