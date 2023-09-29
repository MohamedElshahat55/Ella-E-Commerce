import { createRouter, createWebHistory } from "vue-router";

// Lazy load
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "Home Page",
    },
  },
  {
    name: "products_category",
    path: "/products/:category/:title",
    component: () => import("@/views/ProductsCategory.vue"),
    meta: {
      title: "Products",
    },
  },
  {
    name: "product_details",
    path: "/products/product-details/:productId",
    component: () => import("@/views/ProductDetails.vue"),
    meta: {
      title: "Product Details",
    },
  },

  {
    name: "About",
    path: "/about",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "About",
    },
  },
];

// router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// show thw meta title depend on routes
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
