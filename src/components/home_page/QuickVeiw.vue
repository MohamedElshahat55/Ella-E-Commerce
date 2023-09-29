<template>
  <div class="qwick-view">
    <v-dialog v-model="dialog" max-width="1000" max-height="500">
      <v-icon
        style="
          position: absolute;
          top: -12px;
          right: -12px;
          background-color: black;
          padding: 12px;
          color: rgb(175, 175, 175);
          z-index: 10;
          font-size: 12px;
          cursor: pointer;
        "
        @click="dialog = false"
      >
        mdi-close
      </v-icon>
      <v-card elevation="0" class="content_card">
        <v-container fluid class="bg-white p-14">
          <v-row>
            <v-col cols="7">
              <img
                :src="tab ? tab : product.thumbnail"
                :alt="product.title"
                class="w-100"
                height="400"
                v-if="!loading"
              />
              <v-skeleton-loader v-if="loading" type="image,image,image">
              </v-skeleton-loader>
              <v-tabs
                center-active
                height="80"
                v-model="tab"
                class="mt-10"
                v-if="!loading"
              >
                <v-tab
                  v-for="(img, i) in product.images"
                  :key="i"
                  class="mx-10"
                  :value="img"
                >
                  <img :src="img" alt="" width="100" height="100" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="5" class="pl-6">
              <v-skeleton-loader
                v-if="loading"
                type="article,article,article,button"
              >
              </v-skeleton-loader>
              <v-card elevation="0" v-if="!loading">
                <v-card-title class="px-0 font-weight-bold text-subtitle-1"
                  >({{ product.title }}) Sample - {{ product.category }} For
                  Sale</v-card-title
                >
                <div class="d-flex align-center" style="gap: 10px">
                  <v-rating
                    v-model="product.rating"
                    half-increments
                    color="yellow-darken-2"
                    size="x-small"
                    density="combact"
                  ></v-rating>
                  <span style="color: rgb(152, 152, 152)"
                    >Stock: {{ product.stock }}</span
                  >
                  <v-icon color="red">mdi-fire</v-icon>
                  <span class="text-red">7 solid in last 10 hours</span>
                </div>
                <v-card-text class="px-0" style="color: rgb(152, 152, 152)">{{
                  product.description
                }}</v-card-text>
                <v-card-text class="px-0 pt-0" style="color: rgb(152, 152, 152)"
                  >Brand : {{ product.brand }}</v-card-text
                >
                <v-card-text class="px-0 pt-0" style="color: rgb(152, 152, 152)"
                  >Avilablity :
                  {{
                    product.stock > 0 ? "In Stock" : "Out Of Stock"
                  }}</v-card-text
                >
                <v-card-text class="pl-0" style="font-weight: 900">
                  <del>${{ product.price }}</del>
                  <span>From</span> $<span>
                    {{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}
                  </span></v-card-text
                >
                <v-card-text class="px-0 pt-0">
                  Quantity : {{ quantity }}
                </v-card-text>
                <div
                  class="counter px-3"
                  style="
                    border-radius: 30px;
                    border: 1px solid rgb(69, 69, 69);
                    width: fit-content;
                  "
                >
                  <v-icon size="22" @click="quantity > 1 ? quantity-- : false"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    style="
                      border: none;
                      outline: none;
                      width: 60px;
                      font-size: 13px;
                    "
                    class="text-center py-2"
                    v-model="quantity"
                  />
                  <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
                </div>
                <v-card-text class="px-0 pt-2 font-weight-bold"
                  >Subtotal: ${{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    ) * quantity
                  }}</v-card-text
                >
                <v-card-actions class="mt-7 px-0 w-100">
                  <v-btn
                    variant="outlined"
                    style="text-transform: none; background-color: black"
                    class="w-75 text-white"
                    density="compact"
                    height="50"
                    rounded="pill"
                    @click="addToCart(product)"
                    >Add To Cart</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/lib/labs/components";
import { mapActions, mapState } from "pinia";
import { cartStore } from "../../stores/cart";
export default {
  components: {
    VSkeletonLoader,
  },
  inject: ["Emitter"],
  data: () => ({
    tab: "",
    quantity: 1,
    loading: false,
    dialog: false,
    product: "",
  }),
  methods: {
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.addItem(item);
    },
  },

  mounted() {
    this.Emitter.on("openPopup", (data) => {
      this.loading = true;
      this.product = data;
      this.dialog = !this.dialog;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
};
</script>

<style lang="scss">
.content_card {
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
