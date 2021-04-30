<template>
  <div class="login">
      
      <form @submit.prevent="Login">
        <h1>Login</h1>
        <input type="text" placeholder="email" v-model="email">
        <input :type="checkbox ? 'text': 'password'"   placeholder="password" v-model="password">
        <input v-bind="checked" type="checkbox" @click="switchVisibility()">
        <input type="submit" value="Login">
        <p>Or sign in with:</p>
        <div class="options">
          <GoogleLogin />
          <FacebookLogin />
        </div>
        <p>Don´t have an account <router-link to="/signup">register here</router-link> </p>   
      </form>
      
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import firebase from 'firebase';
import GoogleLogin from '../components/GoogleLogin';
import FacebookLogin from '../components/FacebookLogin';

export default defineComponent({
  components: {
    GoogleLogin, FacebookLogin
  },
  setup() {
    const email = ref('');
    let password = ref('');
    let checked = ref(false)

    const Login = () => {
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then(data => console.log(data))
      .catch(error => alert(error.message))
    }
    const switchVisibility = () => this.checked = true
    return {
      Login, email, password, switchVisibility,checked
    }
  }
})
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  font-family: 'Nanum Gothic', sans-serif;;
}
form {
  display: flex;
  flex-direction: column;
  border: solid rgba(0, 0, 0, 0.445) 1px;
  max-width: 50%;
  padding: 1rem;
}
input {
  margin: .5rem;
  padding: .5rem;
  border-radius: 5px 0px;
  border: solid 1px rgba(65, 62, 62, 0.534);
}
.options {
  display: flex;
  justify-content: space-evenly;
}

</style>
