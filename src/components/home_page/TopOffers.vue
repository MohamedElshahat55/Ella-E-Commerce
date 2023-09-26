<template>
  <div class="top-offers py-8 bg-grey-lighten-4">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div v-bind="props" style="overflow: hidden" class="rounded-lg">
              <img
                src="../../assets/images/playstations.webp"
                class="w-100"
                :style="`cursor:pointer;transition:0.7s all ease-in-out; scale :${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div v-bind="props" style="overflow: hidden" class="rounded-lg">
              <img
                src="../../assets/images/headset.webp"
                class="w-100"
                :style="`cursor:pointer;transition:0.7s all ease-in-out; scale :${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div v-bind="props" style="overflow: hidden" class="rounded-lg">
              <img
                src="../../assets/images/chairs.webp"
                class="w-100"
                :style="`cursor:pointer;transition:0.7s all ease-in-out; scale :${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              v-bind="props"
              style="overflow: hidden"
              class="pr-2 rounded-lg"
            >
              <img
                src="../../assets/images/iphones.webp"
                class="w-100"
                :style="`cursor:pointer;transition:0.7s all ease-in-out; scale :${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>

        <v-col cols="6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              v-bind="props"
              style="overflow: hidden"
              class="pl-2 rounded-lg"
            >
              <img
                src="../../assets/images/laptops.webp"
                class="w-100"
                :style="`cursor:pointer;transition:0.7s all ease-in-out; scale :${
                  isHovering ? 1.05 : 1
                }`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
