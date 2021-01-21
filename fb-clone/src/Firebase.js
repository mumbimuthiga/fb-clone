// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAjjBLyn7xpwFt-LPcCyKjPCJDJ8nRseak",
    authDomain: "facebook-clone-af712.firebaseapp.com",
    projectId: "facebook-clone-af712",
    storageBucket: "facebook-clone-af712.appspot.com",
    messagingSenderId: "1011589950429",
    appId: "1:1011589950429:web:39d648e736d7ee2095a434",
    measurementId: "G-GE03T8F5WW"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  
  export{auth ,provider};
  export default db;