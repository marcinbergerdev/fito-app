import { createApp } from 'vue'
import { defineAsyncComponent } from 'vue'


import App from './App.vue';
import router from './router.js';
import store from './store/index.js';

import { Icon } from "@iconify/vue";

const BaseButton = defineAsyncComponent(() => import('./cards/BaseButton.vue'));
const BaseCalculate = defineAsyncComponent(() => import('./cards/BaseCalculate.vue'));
const BaseRegistration = defineAsyncComponent(() => import('./cards/BaseRegistration.vue'));



const app = createApp(App);
app.use(router);
app.use(store)

app.component("app-icon", Icon);
app.component("base-button", BaseButton);
app.component("base-calculate", BaseCalculate);
app.component("base-registration", BaseRegistration);



app.mount('#app');