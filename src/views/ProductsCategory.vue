<template>
  <div class="products-categories py-14">
    <h1 class="text-center py-5">{{ $route.params.title }}</h1>
    <v-container fluid v-if="!categoryProducts.length">
      <v-row>
        <v-col cols="12">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image,article,button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <card :loading="loading">
        <v-row>
          <v-col cols="3" v-for="item in categoryProducts" :key="item.id">
            <v-card elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div class="parent" style="height: 200px; overflow: hidden">
                  <v-img
                    v-bind="props"
                    :src="
                      selectedImage[item.title]
                        ? selectedImage[item.title]
                        : item.thumbnail
                    "
                    alt=""
                    class="w-100"
                    :style="`height: 100%; border: 1px solid rgb(234, 234, 234); cursor:pointer ;transition:0.7s all ease-in-out; scale :${
                      isHovering ? 1.05 : 1
                    }`"
                  />
                </div>
              </v-hover>
              <v-card-text class="pl-0 pb-1"
                >({{ item.title }})
                {{
                  `${item.description} ${item.title}`.length <= 52
                    ? `${item.description} ${item.title}`
                    : `${item.description} ${item.title}`.substring(0, 52) +
                      "..."
                }}
              </v-card-text>

              <v-rating
                v-model="item.rating"
                half-increments
                color="yellow-darken-2"
                size="x-small"
                density="combact"
              ></v-rating>
              <v-card-text class="pl-0" style="font-weight: 900">
                <del>${{ item.price }}</del> <span>From</span> $<span
                  class="text-red"
                >
                  {{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    )
                  }}
                </span></v-card-text
              >
              <v-btn-toggle v-model="selectedImage[item.title]">
                <v-btn
                  v-for="(pic, i) in item.images"
                  :value="pic"
                  :key="i"
                  size="x-small"
                >
                  <img
                    :src="pic"
                    alt=""
                    width="30"
                    height="30"
                    class="rounded-pill"
                    style="
                      border: 1px solid black;
                      transition: 0.9s all ease-in-out;
                    "
                  />
                </v-btn>
              </v-btn-toggle>
              <div class="mx-auto my-4 py-3 px-7 d-flex justify-center">
                <v-btn
                  class="text-capitalize rounded-pill w-100 py-2 font-weight-bold"
                  variant="outlined"
                  >choose options</v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
      </card>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "../stores/products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
export default {
  components: {
    VSkeletonLoader,
  },
  data: () => ({
    selectedImage: {},
    loading: false,
  }),
  methods: {
    ...mapActions(productsModule, ["getProductsCategory"]),
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    async $route() {
      this.loading = true;
      await this.getProductsCategory(this.$route.params.category);
      this.loading = true;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getProductsCategory(this.$route.params.category);
    this.loading = true;
  },
};
</script>
