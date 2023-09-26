<template>
  <div class="shop-with-us py-14 my-5">
    <div class="title">
      <h2 class="text-center text-h4 font-weight-black pb-10">
        <span>Why Shop </span>With Us ?
      </h2>
    </div>
    <div class="content">
      <v-container fluid>
        <v-row>
          <v-col cols="3">
            <v-card
              elevation="0"
              class="text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img src="../../assets/images/free-shipping.png" alt="" />
              </div>
              <v-card-title
                style="
                  white-space: pre-wrap;
                  line-height: 1.3;
                  font-weight: 700;
                "
                >Free Shipping On First Order</v-card-title
              >
              <v-card-text class="pb-0"
                >Lorem ipsum dolor sit amet elit</v-card-text
              >
              <a
                href="#"
                style="font-size: 14px; font-weight: 700px; color: white"
                >Learn More</a
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              elevation="0"
              class="text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img src="../../assets/images/weekly-flash-sales.png" alt="" />
              </div>
              <v-card-title
                style="
                  white-space: pre-wrap;
                  line-height: 1.3;
                  font-weight: 700;
                "
                >Weekly Falsh Sale</v-card-title
              >
              <v-card-text class="pb-0"
                >Lorem ipsum dolor sit amet elit</v-card-text
              >
              <a
                href="#"
                style="font-size: 14px; font-weight: 700px; color: white"
                >Learn More</a
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              elevation="0"
              class="text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img src="../../assets/images/discount.png" alt="" />
              </div>
              <v-card-title
                style="
                  white-space: pre-wrap;
                  line-height: 1.3;
                  font-weight: 700;
                "
                >Anual Payment Discount</v-card-title
              >
              <v-card-text class="pb-0"
                >Lorem ipsum dolor sit amet elit</v-card-text
              >
              <a
                href="#"
                style="font-size: 14px; font-weight: 700px; color: white"
                >Learn More</a
              >
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card
              elevation="0"
              class="text-center text-white"
              color="transparent"
            >
              <div class="img-parent">
                <img src="../../assets/images/cash-back.png" alt="" />
              </div>
              <v-card-title
                style="
                  white-space: pre-wrap;
                  line-height: 1.3;
                  font-weight: 700;
                "
                class="px-0"
                >Cashback Reward Program</v-card-title
              >
              <v-card-text class="pb-0"
                >Lorem ipsum dolor sit amet elit</v-card-text
              >
              <a
                href="#"
                style="font-size: 14px; font-weight: 700px; color: white"
                >Learn More</a
              >
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.shop-with-us {
  background-image: url(../../assets/images/why-shop-with-us-banner.webp);
  background-size: cover;
  h2 {
    color: white;
    span {
      color: #69f0ae;
    }
  }
}
</style>
