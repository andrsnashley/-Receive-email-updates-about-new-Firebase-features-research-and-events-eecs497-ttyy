import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, query, where } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBt4Flz-82HOr2lsXpRyNma5AuWQ-n4Ayw",
  authDomain: "eecs497-ttyy.firebaseapp.com",
  projectId: "eecs497-ttyy",
  storageBucket: "eecs497-ttyy.appspot.com",
  messagingSenderId: "895527995614",
  appId: "1:895527995614:web:4508632d4166985ae95a4f",
  measurementId: "G-DJYWR5HMKH"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const usersCollection = collection(db, 'users');

export const createUser = async user => {

  console.log("entered create user");
  var user_dict = user.user

  var username = user_dict.username;

  const usersSnapshot = await getDocs(usersCollection);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  console.log(usersList);

  // const docRef = doc(db, "users", username);
  // getDoc(docRef).then(docSnap => {
  //   if(docSnap.exists()) {
  //     alert("Username already exists, please choose another name")
  //   } else {
  //     router.push("/game");
  //     setDoc(doc(db, "users", username), user_dict);
  //     return true;
  //   }
  // })


}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const loginUser = user => {
  const name = user.username;
  const docRef = doc(db, "users", name);
  getDoc(docRef).then(docSnap => {
    if (docSnap.exists() && user.password == docSnap.data().password) {
      router.push("/game");
      setDoc(doc(db, "session", "logged_in_user"), {"user_id": user.username})
      return true;
    } else {
      alert("Wrong Password! Try Again or Create an Account")
      return false;
    }
  })
}

/*export async function getLoggedInUser() {
  const loggedInUser = await loggedInUserCollection.doc('logged_in_user').get();
  return loggedInUser.exists ? loggedInUser.user_id : null
}*/

export async function getLoggedInUser() {
  const q = query(loggedInUserCollection);
  const querySnapshot = await getDocs(q);
  console.log(querySnapshot);
  var user = "";
  if (querySnapshot) {
    querySnapshot.forEach((doc) => {
      user = doc.data().user_id;
      console.log(user);
    })
  }
  else {
    return null;
  }
  return user; 
}    
