import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ( {
    apiKey: "AIzaSyAoFvH4rdWZCfVCuWFJ5_3SPdpLqUGQ-CQ",
    authDomain: "g-chat-87a86.firebaseapp.com",
    projectId: "g-chat-87a86",
    storageBucket: "g-chat-87a86.appspot.com",
    messagingSenderId: "284697729209",
    appId: "1:284697729209:web:c6fd7a6a55f9ca490a2368"
  }).auth();