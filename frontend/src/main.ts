import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAwV5n3Pupk38jk50ZIdufvKln4mlu-0BI",
  authDomain: "login-c7103.firebaseapp.com",
  projectId: "login-c7103",
  storageBucket: "login-c7103.appspot.com",
  messagingSenderId: "7455958318",
  appId: "1:7455958318:web:c7f98d3214b12a69bc86bf"
};

  firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
