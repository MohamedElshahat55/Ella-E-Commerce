<template>
  <div class="top-cat py-10">
    <div class="cyber-banner">
      <img
        src="../../assets/images/cyber-banner.webp"
        alt="cyber-banner"
        class="w-100"
      />
    </div>
    <div class="categories">
      <v-container fluid>
        <h2 class="text-h5 text-center font-weight-black py-10">
          Top Categories
        </h2>
        <span class="d-block text-right font-weight-bold py-6"
          ><a href="#" class="text-red" style="font-size: 20px"
            >Shop All</a
          ></span
        >
        <v-row>
          <v-col cols="2" v-for="cat in categories" :key="cat.title">
            <v-card class="text-center" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div class="parent" style="overflow: hidden">
                  <img
                    :src="cat.image"
                    :alt="cat.title"
                    :style="`height: 100%; cursor:pointer ;transition:0.4s all ease-in-out; scale :${
                      isHovering ? 1.05 : 1
                    }`"
                    v-bind="props"
                  />
                </div>
              </v-hover>
              <v-card-text>{{ cat.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: "Mobil Phones",
        image:
          "http://themes.halothemes.com/html/ella-html-demo/assets/images/banners/home/home-10/banner-9.png",
      },
      {
        title: "Laptops & Tablets",
        image:
          "http://themes.halothemes.com/html/ella-html-demo/assets/images/banners/home/home-10/banner-10.png",
      },
      {
        title: "Televisions",
        image:
          "http://themes.halothemes.com/html/ella-html-demo/assets/images/banners/home/home-10/banner-11.png",
      },
      {
        title: "PCs Accessories",
        image:
          "http://themes.halothemes.com/html/ella-html-demo/assets/images/banners/home/home-10/banner-12.png",
      },
      {
        title: "Audio & vedio",
        image:
          "http://themes.halothemes.com/html/ella-html-demo/assets/images/banners/home/home-10/banner-13.png",
      },
      {
        title: "Gaming & Accessories",
        image:
          "http://themes.halothemes.com/html/ella-html-demo/assets/images/banners/home/home-10/banner-14.png",
      },
      {
        title: "Home Applicens",
        image:
          "http://themes.halothemes.com/html/ella-html-demo/assets/images/banners/home/home-10/banner-15.png",
      },
      {
        title: "Kitchen Applicens",
        image:
          "http://themes.halothemes.com/html/ella-html-demo/assets/images/banners/home/home-10/banner-16.png",
      },
      {
        title: "Cameras",
        image:
          "http://themes.halothemes.com/html/ella-html-demo/assets/images/banners/home/home-10/banner-17.png",
      },
      {
        title: "Consumables",
        image:
          "http://themes.halothemes.com/html/ella-html-demo/assets/images/banners/home/home-10/banner-18.png",
      },
      {
        title: "Smart Homes",
        image:
          "http://themes.halothemes.com/html/ella-html-demo/assets/images/banners/home/home-10/banner-19.png",
      },
      {
        title: "Mobil Accessories",
        image:
          "http://themes.halothemes.com/html/ella-html-demo/assets/images/banners/home/home-10/banner-20.png",
      },
    ],
  }),
};
</script>
