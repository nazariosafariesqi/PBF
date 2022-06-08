import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCfcX5DMr9BfX-_iYqKQo-IQA-1icQ0jXA",
  authDomain: "jobsheet12-e80c6.firebaseapp.com",
  projectId: "jobsheet12-e80c6",
  storageBucket: "jobsheet12-e80c6.appspot.com",
  messagingSenderId: "715941982442",
  appId: "1:715941982442:web:d04fe0f45617acd7c3a793",
  measurementId: "G-9X55X5R1X0"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
