<template>
  <div class="oredr-success">
    <v-dialog v-model="dialog" width="40%" persistent>
      <v-card class="py-8">
        <div class="text-center">
          <v-icon
            style="
              background-color: white;
              padding: 35px;
              color: green;
              font-size: 33px;
              border-radius: 50px;
              border: 1px solid green;
              margin: 22px;
            "
            >mdi-check</v-icon
          >
          <v-card-title class="font-weight-bold text-h5"
            >Order Placed Successfuly!</v-card-title
          >
          <v-card-text class="py-6"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            reprehenderit nisi rerum adipisci hic impedit, veniam dignissimos,
            illo recusandae laborum delectus earum autem pariatur? Eaque
            voluptatibus laborum ullam possimus mollitia?</v-card-text
          >
          <v-actions>
            <v-btn variant="elevated" color="blue" @click="resetData"
              >Got it</v-btn
            >
          </v-actions>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { cartStore } from "../../stores/cart";
import { mapActions } from "pinia";
export default {
  props: {
    popup: {
      type: Boolean,
    },
  },
  data: () => ({
    dialog: false,
  }),
  watch: {
    dialog(newVal) {
      if (!newVal) {
        this.$emit("close_popup");
      }
    },
  },
  methods: {
    ...mapActions(cartStore, ["resetItems"]),
    resetData() {
      this.resetItems();
      this.dialog = false;
      this.$router.push({ name: "home" });
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
};
</script>
