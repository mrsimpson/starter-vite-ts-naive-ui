import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import VueMatomo from "vue-matomo";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(createPinia());
app.use(router);
// .use(VueMatomo, {
//   host: "https://matomo.dilab.co",
//   siteId: 2,
//   router,
//   disableCookies: true,
// });

app.use(router)
app.mount("#app");
