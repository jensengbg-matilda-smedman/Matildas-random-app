<template>
  <div id="nav">

  </div>
  <router-view/>
</template>

<script>
import { defineComponent, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import firebase from 'firebase'

export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();

        onBeforeMount(() => {
            firebase.auth().onAuthStateChanged((user) => {
              if(!user) {
                router.replace('/login');
              } else if(route.path == '/login' || route.path == '/signup') {
                router.replace('/')
              }
            })
        }) 
    }
})
</script>


<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Nanum Gothic', sans-serif;
  width: 100vw;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
