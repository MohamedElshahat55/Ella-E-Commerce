<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CardDrawer />
      <v-main style="padding-top: 170px">
        <slot></slot>
      </v-main>
      <AppNav />
      <FixedNav />
      <AppFooter />
    </v-layout>
  </div>
</template>

<!-- <script>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import CardDrawer from "./CardDrawer.vue";
import FixedNav from "./FixedNav.vue";
export default {
  components: {
    AppNav,
    AppFooter,
    CardDrawer,
    FixedNav,
  },
  data() {
    return {
      drawer: true,
    };
  },
};
</script> -->

<script setup>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import CardDrawer from "./CardDrawer.vue";
import FixedNav from "./FixedNav.vue";
import { ref } from "vue";
// data
const drawer = ref(true);
</script>
