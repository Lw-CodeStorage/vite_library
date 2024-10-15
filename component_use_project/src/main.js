import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 在 index.html 引入 <!-- <script type="module" src="/src/lib.js"></script> -->
// import {A} from './lib.js';
// const app = createApp(App)
// app.component('A',A);
// app.mount('#app')

// 在 index.html 引入 <script src="/src/lib.umd.cjs"></script>
const app = createApp(App)
app.component('A',Test.A);
app.component('B',Test.B);
app.mount('#app')