<template>
  <app-layout>
    <router-view />
    <QuickVeiw />
  </app-layout>
</template>

<script>
import AppLayout from "./components/global/AppLayout.vue";
import QuickVeiw from "@/components/home_page/QuickVeiw.vue";
export default {
  components: {
    AppLayout,
    QuickVeiw,
  },
};
</script>

<style lang="scss">
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
