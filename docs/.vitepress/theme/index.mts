import DefaultTheme from 'vitepress/theme'
import './style/index.css' 

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

import Linkcard from "./components/Linkcard.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import MyLayout from './components/MyLayout.vue'
import vfooter from './components/vfooter.vue'

import vuejs from './components/vuejs.vue'
import lists from './lists/lists.vue'
import navlist from './navlist/navlist.vue'


export default {
  extends: DefaultTheme,

  Layout: MyLayout, 

  enhanceApp({app}) { 
    // 注册全局组件
    app.component('Linkcard' , Linkcard)
    app.component('ArticleMetadata' , ArticleMetadata)
    app.component('vuejs' , vuejs)
    app.component('lists' , lists)
    app.component('navlist' , navlist)
    app.component('vfooter' , vfooter)
  },

  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
}