import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

import axios, { AxiosInstance } from "axios";

const app = createApp(App);

app
  .use(router)
  .use(store)
  .mount("#app");

app.config.globalProperties.$axios = axios.create({
  baseURL: process.env.VUE_BACKEND_BASEURL ?? "http://localhost:5000/"
});

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}
