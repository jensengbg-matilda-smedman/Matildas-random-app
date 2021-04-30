<template>
  <div class="signup">
      <form @submit.prevent="Register">
          <h1>Sign up</h1>
        <input type="text" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <input type="submit" value="Register">
        <p>Have an account <router-link to="/login">login here</router-link> </p>
      </form>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import firebase from 'firebase'

export default defineComponent({
    setup() {
        const email = ref('');
        const password = ref('');

        const Register = () => {
            firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then(user => {
                alert(user)
            })
            .catch(error => alert(error.message))
        }
        return {
            Register, email, password
        }
    }
})
</script>

<style scoped>
.signup {
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

</style>