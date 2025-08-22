import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from "vue3-google-login";


const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId: "34189398192-pddbadrri3r3sv0gnbp5ibmelelloq5t.apps.googleusercontent.com",
});

app.use(router);
app.mount('#app');
