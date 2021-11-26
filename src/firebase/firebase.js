import firebase from "firebase";
import 'firebase/auth'


export const auth = firebase.initializeApp({
  apiKey: 'AIzaSyDoGfZDK3k72bLWpMroWevygU-etmSJm2o',
  authDomain: 'chatroom-89604.firebaseapp.com',
  projectId: 'chatroom-89604',
  storageBucket: 'chatroom-89604.appspot.com',
  messagingSenderId: '317992851449',
  appId: '1:317992851449:web:b34fd1ad84cbf5197c8f28',
}).auth()