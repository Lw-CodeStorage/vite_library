// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


// src/main.js
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import { createApp } from 'vue';
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import MyComponent from './components/MyComponent.vue';

// 創建
const app = createApp(MyComponent);

// 配置 Vuetify
// const vuetify = createVuetify()
const vuetify = createVuetify({
	components,
	directives,
});

// 使用 Vuetify 插件
app.use(vuetify);

// 掛載到指定的 DOM 元素
app.mount('#my-vue-component');
