<template>
  <div @click="Login">
      <img src="../assets/google.png" alt="google">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { googleLogin } from '../modules/login'
export default defineComponent({
    setup() {
        const Login = () => {
            console.log('login button', googleLogin)
            googleLogin()
        }
        return {
        Login
    }
    },
})
</script>


<style>

</style>