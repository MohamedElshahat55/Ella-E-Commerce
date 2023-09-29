<template>
  <UpperBanner />
  <TheFeature />
  <TopOffers />
  <ProductComponent
    :products="flashDeals"
    titleColor="red"
    title="Flash Deals"
  />
  <TopCategories />
  <NewProducts :products="newProducts" />
  <QualitySection />
  <ProductComponent
    :products="mobilPhones"
    title="Top Mobile Phones"
    titleColor="black"
  />
  <v-container fluid>
    <v-row>
      <v-col cols="6"
        ><img src="../assets/images/band-left-cover.webp" alt="" class="w-100"
      /></v-col>
      <v-col cols="6"
        ><img src="../assets/images/band-right-cover.webp" alt="" class="w-100"
      /></v-col>
    </v-row>
  </v-container>

  <ProductComponent
    :products="fragrances"
    title="Top Fragrances"
    titleColor="black"
  />
  <WhyShopWithUs />
</template>

<script>
import UpperBanner from "../components/home_page/UpperBanner.vue";
import TheFeature from "../components/home_page/TheFeature.vue";
import TopOffers from "../components/home_page/TopOffers.vue";
import ProductComponent from "../components/home_page/ProductsSwiper.vue";
import TopCategories from "../components/home_page/TopCategories.vue";
import NewProducts from "../components/home_page/NewProducts.vue";
import QualitySection from "../components/home_page/QualitySection.vue";
import WhyShopWithUs from "../components/home_page/WhyShopWithUs.vue";

import { productsModule } from "../stores/products";
import { mapActions, mapState } from "pinia";
export default {
  name: "home",
  components: {
    UpperBanner,
    TheFeature,
    TopOffers,
    ProductComponent,
    TopCategories,
    NewProducts,
    QualitySection,
    WhyShopWithUs,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "newProducts",
      "mobilPhones",
      "fragrances",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
