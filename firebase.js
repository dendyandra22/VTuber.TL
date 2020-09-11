import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAF8nW3sLdkCDrjeoM-uexRpPjooGttvCo',
  authDomain: 'vtubertl.firebaseapp.com',
  databaseURL: 'https://vtubertl.firebaseio.com/',
  projectId: 'vtubertl',
  storageBucket: 'vtubertl.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:512685823175:android:04067c2c968837a5479ae2',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };