import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

// import acui from "ac-ui";
import acui from "../dist/index.esm.js"
// import "theme-chalk/index.scss"
import "../dist/assets/style.css"
createApp(App).use(acui).use(router).mount("#app")