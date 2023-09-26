import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    mobilPhones: [],
    fragrances: [],
    categoryProducts: [],
    categories: [
      {
        title: "Smart Phones",
        route: "smartphones",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Laptops",
        route: "laptops",
      },
      {
        title: "Men's Shoes",
        route: "mens-shoes",
      },
      {
        title: "Men's Watches",
        route: "mens-watches",
      },
      {
        title: "Women's Bags",
        route: "womens-bags",
      },
      {
        title: "Women's jewellery",
        route: "womens-jewellery",
      },
      {
        title: "Motorcycle",
        route: "motorcycle",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.newProducts = res.data.products.filter(
            (el) => el.category === "laptops"
          );
          this.flashDeals = res.data.products.slice(0, 8);
          this.mobilPhones = res.data.products.filter(
            (el) => el.category === "smartphones"
          );
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
        })
        .catch((err) => console.log(err));
    },
    async getProductsCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => {
          this.categoryProducts = res.data.products.slice(0, 4);
          console.log(this.categoryProducts);
        });
    },
  },
});
