import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyC8iv05pnxSQAVE27Gj8CLPUJQzUlrmyTY",
  authDomain: "kuis2-d05dc.firebaseapp.com",
  projectId: "kuis2-d05dc",
  storageBucket: "kuis2-d05dc.appspot.com",
  messagingSenderId: "201305195535",
  appId: "1:201305195535:web:396aa9b6bf9c3b413e0f7a",
  measurementId: "G-3D8W5P96NB"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
