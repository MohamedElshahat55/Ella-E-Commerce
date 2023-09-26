<template>
  <div class="new-products">
    <v-container fluid>
      <h1 class="pt-10" style="font-size: 30px; font-weight: 900">
        New Products
      </h1>
      <span class="d-block text-right font-weight-bold"
        ><a href="#" class="text-red" style="font-size: 20px">Shop All</a></span
      >
      <v-row>
        <!-- Skeleton Loader -->
        <v-col cols="7" v-if="!products.length" style="margin-top: 64px">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader type="image,article "></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="7" style="margin-top: 64px" v-else>
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
            class="pb-9"
            :autoplay="{ delay: 3000 }"
          >
            <swiper-slide v-for="product in products" :key="product.id">
              <v-card elevation="0">
                <v-hover v-slot="{ isHovering, props }">
                  <div class="parent" style="height: 200px; overflow: hidden">
                    <v-img
                      v-bind="props"
                      :src="
                        selectedImage[product.title]
                          ? selectedImage[product.title]
                          : product.thumbnail
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
                  >({{ product.title }})
                  {{
                    product.description.split(" ").length <= 2
                      ? product.description
                      : product.description.split(" ").slice(0, 2).join(" ") +
                        "..."
                  }}
                </v-card-text>

                <v-rating
                  v-model="product.rating"
                  half-increments
                  color="yellow-darken-2"
                  size="x-small"
                  density="combact"
                ></v-rating>
                <v-card-text class="pl-0" style="font-weight: 900">
                  <del>${{ product.price }}</del> <span>From</span> $<span
                    class="text-red"
                  >
                    {{
                      Math.ceil(
                        product.price -
                          product.price * (product.discountPercentage / 100)
                      )
                    }}
                  </span></v-card-text
                >
                <v-btn-toggle v-model="selectedImage[product.title]">
                  <v-btn
                    v-for="(pic, i) in product.images"
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
            </swiper-slide>
            <div class="swiper-prev"></div>
            <div class="swiper-next"></div>
            <div class="swiper-pagination"></div>
          </Swiper>
        </v-col>
        <v-col cols="5">
          <div class="parent">
            <img
              src="../../assets/images/vr-banner.webp"
              alt="vr-banner"
              class="w-100"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/labs/components.mjs";
export default {
  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  data() {
    return {
      selectedImage: {},
    };
  },
};
</script>
