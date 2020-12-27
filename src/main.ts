import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App);

const arr = 'Todo,Todo1,Todo2,Todo3,Todo4,Todo5'.split(',');
arr.forEach(i => {
  app.component(i,
    defineAsyncComponent(() => import(`./component/${i[0].toLocaleLowerCase()}${i.slice(1)}.vue`)));
});

app.mount('#app')