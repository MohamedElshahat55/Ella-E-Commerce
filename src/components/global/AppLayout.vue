<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CardDrawer v-if="$route.name != 'checkout'" />
      <v-main
        :style="`padding-top:${$route.name == 'checkout' ? '0px' : '170px'}`"
      >
        <slot></slot>
      </v-main>
      <AppNav v-if="$route.name != 'checkout'" />
      <FixedNav v-if="$route.name != 'checkout'" />
      <AppFooter v-if="$route.name != 'checkout'" />
    </v-layout>
  </div>
</template>

<script setup>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import CardDrawer from "./CardDrawer.vue";
import FixedNav from "./FixedNav.vue";
import { ref } from "vue";
// data
const drawer = ref(true);
</script>
