<template>
  <app-layout>
    <router-view />
    <QuickVeiw />
    <v-snackbar v-model="bar" location="left bottom" timeout="3000">
      {{ itemTitle }} has been aded to your cart successfuly
      <template v-slot:actions>
        <v-icon @click="bar = false">mdi-close</v-icon>
      </template>
    </v-snackbar>
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
  inject: ["Emitter"],
  data: () => ({
    bar: false,
    itemTitle: "",
  }),
  mounted() {
    this.Emitter.on("showMsg", (data) => {
      this.itemTitle = data;
      this.bar = true;
    });
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
