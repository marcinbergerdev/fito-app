import { createApp } from 'vue'
import { createI18n } from "vue-i18n/index.mjs";
import { defineAsyncComponent } from 'vue'


import App from './App.vue';

import router from './router.js';
import store from './store/index.js';
import { Icon } from "@iconify/vue";

const BaseButton = defineAsyncComponent(() => import('./cards/BaseButton.vue'));
const BaseBox = defineAsyncComponent(() => import('./cards/BaseBox.vue'));
const BaseRegistration = defineAsyncComponent(() => import('./cards/BaseRegistration.vue'));
const BaseModal = defineAsyncComponent(() => import('./cards/BaseModal.vue'));
const BaseSpinner = defineAsyncComponent(() => import('./cards/BaseSpinner.vue'));

import en from "./languages/en.json";
import pl from "./languages/pl.json";
import de from "./languages/de.json";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
     en,
     pl,
     de,
  },
});




const app = createApp(App);
app.use(router);
app.use(store)
app.use(i18n);


app.component("app-icon", Icon);
app.component("base-button", BaseButton);
app.component("base-box", BaseBox);
app.component("base-registration", BaseRegistration);
app.component("base-modal", BaseModal);
app.component("base-spinner", BaseSpinner);



app.mount('#app');