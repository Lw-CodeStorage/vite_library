import { createApp } from 'vue'
import A from '@/components/A.vue'
import B from '@/components/B.vue'
import App from '@/App.vue' // 假設這是你的主組件






// ### 使用於已經有vue3的專案 ###
// 一般打包，需個專案自行註冊component
export { A,B }


// ### 用於跨框架或單純HTML環境 ###
// 自動掛載，引入直接呈現
// window.onload = () => {

//     // 檢查是否有 #app，如果不存在，則掛載到 body
//     const mountElement = document.getElementById('app') || document.body;
//     const app = createApp(App)

//     const vuetify = createVuetify({
//     components,
//     directives,
//     })
//   // 如果你想讓 A 和 B 組件在應用中可用，可以在這裡全局註冊它們
//   app.component('A', A)
//   app.component('B', B)
//   app.mount(mountElement)
// };
// // 將組件暴露出去
// export { A, B }