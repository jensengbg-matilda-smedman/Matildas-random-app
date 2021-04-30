import firebase from "firebase";
import { useRouter } from 'vue-router'

export const googleLogin = () => {
  const router = useRouter()
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly"),
    provider.addScope("");
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      alert(
        JSON.stringify(`Username is : ${user?.displayName}\nemail is : ${user?.email}`)
      );
      router.replace("/home");
      return user
    })
    .catch((error) => {
      console.log(error.message);
    });

}
export const fbLogin = () => {
  const router = useRouter()
  const provider = new firebase.auth.FacebookAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      alert(
        JSON.stringify(`Username is : ${user?.displayName}\nemail is : ${user?.email}`)
      );
      router.replace("/home");
      return user
    })
    .catch((error) => {
      console.log(error.message);
    });

}