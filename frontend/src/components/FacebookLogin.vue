<template>
  <div @click="Login">
      <img src="../assets/facebook.png" alt="google">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { fbLogin } from '../modules/login'
export default defineComponent({
    setup() {
        const Login = () => {
            console.log('login button', fbLogin)
            fbLogin()
        }
        return {
        Login
    }
    },
})
</script>


<style>

</style>