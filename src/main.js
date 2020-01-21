import Vue           from 'vue';
import * as firebase from 'firebase';
import App           from './App.vue';
import router        from './router';
import store         from './store/store';

Vue.config.productionTip = false;

let app = '';

firebase.initializeApp({
  apiKey: 'AIzaSyDMOgeM7Hn0Nbi3OCVZPplbEgIjXAb0EfA',
  authDomain: 'olios-ee172.firebaseapp.com',
  databaseURL: 'https://olios-ee172.firebaseio.com',
  projectId: 'olios-ee172',
  storageBucket: '',
  messagingSenderId: '1059088625973',
  appId: '1:1059088625973:web:6a35856bf63b4f02c55c7c',
});

router.beforeEach((to, from, next) => {
  store.commit('setCurrentPath', to.path);
  next();
});

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});
