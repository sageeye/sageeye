import { createApp } from "vue";
import App from "./App.vue";
import "bulma/css/bulma.css";
import router from "./router";
require("./assets/css/styles.css");
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faEnvelope, faLinkedinIn, faFacebookF, faInstagram, faTwitter);
createApp(App).use(router).component("fa", FontAwesomeIcon).mount("#app");
