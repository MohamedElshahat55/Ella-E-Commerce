<template>
  <div class="product-details">
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            :alt="singleProduct.title"
            class="w-100"
            height="500"
            v-if="!loading"
          />
          <v-skeleton-loader v-if="loading" type="image,image,image">
          </v-skeleton-loader>
          <v-tabs
            center-active
            height="100"
            v-model="tab"
            class="mt-10"
            v-if="!loading"
          >
            <v-tab
              v-for="(img, i) in singleProduct.images"
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
              >({{ singleProduct.title }}) Sample -
              {{ singleProduct.category }} For Sale</v-card-title
            >
            <div class="d-flex align-center" style="gap: 10px">
              <v-rating
                v-model="singleProduct.rating"
                half-increments
                color="yellow-darken-2"
                size="x-small"
                density="combact"
              ></v-rating>
              <span style="color: rgb(152, 152, 152)"
                >Stock: {{ singleProduct.stock }}</span
              >
              <v-icon color="red">mdi-fire</v-icon>
              <span class="text-red">7 solid in last 10 hours</span>
            </div>
            <v-card-text class="px-0" style="color: rgb(152, 152, 152)">{{
              singleProduct.description
            }}</v-card-text>
            <v-card-text class="px-0 pt-0" style="color: rgb(152, 152, 152)"
              >Brand : {{ singleProduct.brand }}</v-card-text
            >
            <v-card-text class="px-0 pt-0" style="color: rgb(152, 152, 152)"
              >Avilablity :
              {{
                singleProduct.stock > 0 ? "In Stock" : "Out Of Stock"
              }}</v-card-text
            >
            <v-card-text class="pl-0" style="font-weight: 900">
              <del>${{ singleProduct.price }}</del> <span>From</span> $<span>
                {{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
                  )
                }}
              </span></v-card-text
            >
            <v-card-text class="px-0 pt-0"> Quantity </v-card-text>
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
                min="1"
                v-model="quantity"
              />
              <v-icon size="22" @click="quantity++">mdi-plus</v-icon>
            </div>
            <v-card-text class="px-0 pt-2 font-weight-bold"
              >Subtotal: ${{
                Math.ceil(
                  singleProduct.price -
                    singleProduct.price *
                      (singleProduct.discountPercentage / 100)
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
                >Add To Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
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
    tab: "",
    quantity: 1,
    loading: false,
    product: {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
  }),
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
  },
  methods: {
    ...mapActions(productsModule, ["getSingleProduct"]),
  },
  async mounted() {
    this.loading = true;
    await this.getSingleProduct(this.$route.params.productId);
    this.loading = false;
  },
};
</script>
