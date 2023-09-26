<template>
  <div class="banner">
    <div class="parent">
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="banner-content text-white">
              <div class="center">
                <h3 class="text-h2">
                  <span style="color: #69f0ae">Huge Saving </span>on UHD
                  Televisions
                </h3>
                <div class="hint my-4 text-h6">
                  Sale up to 70% off on selected items
                </div>
                <v-btn rounded variant="outlined" density="combact" class="pa-3"
                  >Shop now</v-btn
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    height: 500px;
    background-image: url("../../assets//images/banner-bg.jpg");
    background-size: cover;
    background-position: -30px top;
    .banner-content {
      padding: 100px 0 0 50px;
    }
  }
}
</style>
