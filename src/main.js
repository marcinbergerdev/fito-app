import { createApp } from 'vue'
import { defineAsyncComponent } from 'vue'


import App from './App.vue';
import router from './router.js';
import store from './store/index.js';

const BaseButton = defineAsyncComponent(() => import('./cards/BaseButton.vue'));


const app = createApp(App);
app.use(router);
app.use(store)

app.component("base-button", BaseButton);


app.mount('#app');