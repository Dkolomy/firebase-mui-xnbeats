import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { addDoc, doc, setDoc, query, where, getDocs } from "firebase/firestore";
import { usersCollection, auth } from "../utils/fbase";

export const registerUser = async ({ first, last, email, password }) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = response;
    const userProfile = {
      uid: user.uid,
      email: email,
      name: first,
      lastname: last,
      role: 1,
    };

    await addDoc(usersCollection, userProfile);
    return { isAuth: true, user: userProfile, errorCode: "" };
  } catch (error) {
    return { isAuth: false, user: null, errorCode: error.code };
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    const q = query(usersCollection, where("uid", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
    return { isAuth: true, user: querySnapshot.docs[0].data(), errorCode: "" };
  } catch (error) {
    return { isAuth: false, user: null, errorCode: error.code };
  }
};

export const autoSignIn = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const q = query(usersCollection, where("uid", "==", user.uid));
        getDocs(q).then(querySnapshot => {
          resolve({ isAuth: true, user: querySnapshot.docs[0].data() });
        });
      } else {
        resolve({ errorCode: "auth/not-logged" });
      }
    });
  });
};

export const fakeApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ isAuth: true })
    }, 1000)
  });  
}

// export const autoSignIn = () => (
//   new Promise((resolve, reject) => {
//     onAuthStateChanged(auth, (user) => {
//       if(user) {
//         const q = query(usersCollection, where("uid", "==", user.uid));
//         const querySnapshot = getDocs(q);
//         resolve({ isAuth: true, user: querySnapshot.docs[0].data() })
//       } else {
//         resolve({ isAuth: false, user: null })
//       }
//     })
//   })
// );

//     // await signInWithEmailAndPassword(auth, email, password)
//     //   .then((response) => {
//     //     console.log("Email Verified:", response.user.emailVerified);
//     //     setSnackMessage("Successfully Logged In");
//     //     setOpenSnack(true);
//     //   })
//     //   .catch((error) => {
//     //     // https://firebase.google.com/docs/reference/js/auth
//     //     // readonly INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential";
//     //     const errorCode = error.code;
//     //     //        const errorMessage = error.message;
//     //     //        console.log(errorCode, errorMessage);
//     //     setSnackMessage(errorCode);
//     //     setOpenSnack(true);
//     //   });
