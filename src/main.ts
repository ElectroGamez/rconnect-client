import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

const app = createApp(App);

app
  .use(router)
  .use(store)
  .mount("#app");

app.config.globalProperties.$baseURL = process.env.VUE_APP_BACKEND_URL;

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $baseURL: string;
  }
}
