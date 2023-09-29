<template>
  <div class="card-drawer">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      width="390"
    >
      <v-card elevation="0" class="mt-6 py-4 px-4">
        <v-card-title class="font-weight-bold pt-0">Shopping Cart</v-card-title>
        <v-card-text style="color: rgb(66, 66, 66)"
          >{{ cartItems.length }} items</v-card-text
        >
        <v-card-text v-if="!cartItems.length" style="color: rgb(66, 66, 66)"
          >Free shipping for all orders over $8000!</v-card-text
        >
        <v-card-text
          style="color: rgb(66, 66, 66)"
          class="text-center"
          v-if="!cartItems.length"
          >Your cart is empty</v-card-text
        >
        <v-actions v-if="!cartItems.length">
          <v-btn
            class="w-100 p-4 text-black text-transform-none"
            rounded="pill"
            variant="outlined"
            density="compact"
            height="50"
            style="border: 1px solid rgb(71, 71, 71)"
            >Continue Shopping</v-btn
          >
        </v-actions>
        <v-card class="pa-0" elevation="0">
          <div class="bar-parent mt-4 position-relative">
            <svg
              class="icon-shipping-truck"
              style="
                width: 30px;
                position: absolute;
                bottom: 50%;
                z-index: 1;
                left: calc(50% - 30px);
                transition: 0.3s all ease-in-out;
              "
              fill="#F44336"
              viewBox="0 0 40.55 24"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    class="truck-body"
                    d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                  ></path>
                  <path
                    class="truck-body"
                    d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                  ></path>
                  <path
                    class="wheel"
                    fill="white"
                    d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                  ></path>
                </g>
              </g>
            </svg>
            <v-progress-linear
              color="red"
              height="10"
              model-value="50"
              striped
            ></v-progress-linear>
          </div>
          <v-card-text style="color: rgb(66, 66, 66)"
            >Only $600 away from Free Shipping</v-card-text
          >
          <v-container class="px-0">
            <v-row v-for="item in cartItems" :key="item.id">
              <v-col cols="5">
                <img :src="item.thumbnail" alt="" class="w-100" />
              </v-col>
              <v-col cols="7">
                <v-card-title
                  style="
                    white-space: pre-wrap;
                    font-size: 14px;
                    line-height: 1.2;
                    color: rgb(66, 66, 66);
                  "
                  >{{ item.title }} & {{ item.category }}</v-card-title
                >
                <v-card-text style="color: rgb(66, 66, 66); font-size: 13px"
                  >Category:{{ item.category }}</v-card-text
                >
                <v-card-text class="font-weight-bold pt-0">
                  ${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    ) * item.quantity
                  }}
                </v-card-text>
                <v-card-text
                  class="pt-0 d-flex justify-space-between align-center"
                >
                  <div
                    class="counter px-3"
                    style="
                      border-radius: 30px;
                      border: 1px solid rgb(224, 224, 224);
                      width: fit-content;
                      color: rgb(171, 171, 171);
                    "
                  >
                    <v-icon
                      size="22"
                      @click="item.quantity > 1 ? item.quantity-- : false"
                      color="#a6a6a6"
                      >mdi-minus</v-icon
                    >
                    <input
                      type="number"
                      style="
                        border: none;
                        outline: none;
                        width: 30px;
                        font-size: 12px;
                      "
                      min="1"
                      class="text-center py-2"
                      v-model="item.quantity"
                    />
                    <v-icon size="22" @click="item.quantity++" color="#a6a6a6"
                      >mdi-plus</v-icon
                    >
                  </div>
                  <v-icon @click="deleteItem(item.id)" style="cursor: pointer"
                    >mdi-close</v-icon
                  >
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions
            class="d-flex flex-column align-center justify-center"
            style="gap: 10px"
          >
            <v-btn
              class="w-100 p-4 font-weight-bold"
              rounded="pill"
              variant="elevated"
              density="compact"
              elevation="0"
              color="blue"
              height="50"
              style="border: none; text-transform: none"
              >Checkout</v-btn
            >

            <v-btn
              class="w-100 p-4 text-black"
              rounded="pill"
              variant="outlined"
              density="compact"
              height="50"
              style="border: 1px solid rgb(71, 71, 71); text-transform: none"
              >View Cart</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-card>
      <!-- <v-btn @click="deleteItem(4)">delete</v-btn> -->
    </v-navigation-drawer>
  </div>
</template>

<script>
import { cartStore } from "../../stores/cart";
import { mapActions, mapState } from "pinia";
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  computed: {
    ...mapState(cartStore, ["cartItems"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCartItems", "deleteItem"]),
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
    this.getCartItems();
  },
};
</script>

<style lang="scss">
.v-navigation-drawer__content {
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: rgb(135, 132, 132);
  }
  &::-webkit-scrollbar-track {
    width: 5px;
    background-color: rgb(173, 173, 173);
  }
}
</style>
