import { createApp } from 'vue'
import { defineAsyncComponent } from 'vue'
import App from './App.vue'

const BaseButton = defineAsyncComponent(() => import('./cards/BaseButton.vue'));


const app = createApp(App);

app.component("base-button", BaseButton);


app.mount('#app');