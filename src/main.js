import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import vuetify from "@/plugins/vuetify";
import { createPinia } from "pinia";
// mitt config
import mitt from "mitt";
const Emitter = mitt();

// swiper config
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

createApp(App)
  .use(router)
  .use(vuetify)
  .use(createPinia())
  .provide("Emitter", Emitter)
  .mount("#app");
