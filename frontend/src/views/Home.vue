<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome {{ name }} </h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue';
import firebase from 'firebase'

export default defineComponent({
  name: 'Home',
  setup() {
    const name = ref('');

    onBeforeMount(() => {
         const user = firebase.auth().currentUser;
         if(user) {
           name.value = user.email!.split('@')[0]
         }
    });
    const logout = () => {
      firebase.auth().signOut()
      .then(() => console.log('signed out')).catch(error => alert(error.message))
    }
    return {
      name, logout
    }
  }
});
</script>
