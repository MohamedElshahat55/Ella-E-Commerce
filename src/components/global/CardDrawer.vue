<template>
  <div class="card-drawer">
    <v-navigation-drawer v-model="drawer" temporary location="right">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        eveniet nihil neque blanditiis itaque quas modi sunt quasi et, ducimus
        quis est explicabo nobis veritatis commodi! Veritatis natus corrupti
        tenetur?
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
