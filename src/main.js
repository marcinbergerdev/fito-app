import { createApp } from 'vue'
import { defineAsyncComponent } from 'vue'


import App from './App.vue';
import router from './router.js';

const BaseButton = defineAsyncComponent(() => import('./cards/BaseButton.vue'));


const app = createApp(App);
app.use(router);

app.component("base-button", BaseButton);


app.mount('#app');