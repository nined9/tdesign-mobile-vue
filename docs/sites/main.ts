import { createApp } from 'vue';
import app from './app.vue';
import router from './router';
import TDesign from '@/index';

// import tdesign style
import '@common/style/mobile/_reset.less';
import '@common/style/mobile/index.less';

// import site webcomponents
import '@common/site/lib/site.es.js';
import '@common/site/src/styles/main.less';

createApp(app)
  .use(TDesign)
  .use(router)
  .mount('#app');
