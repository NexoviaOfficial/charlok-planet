// =====================================================================
// بيانات مشروع Firebase الحقيقية الخاصة بك
// =====================================================================
const firebaseConfig = {
  apiKey: "AIzaSyDY5zoBt5NovkwtlEhdsQGC8hyEVmVn0hU",
  authDomain: "charlok-f982b.firebaseapp.com",
  projectId: "charlok-f982b",
  storageBucket: "charlok-f982b.firebasestorage.app",
  messagingSenderId: "980843392483",
  appId: "1:980843392483:web:9479063f3bc8a3539804d6",
  measurementId: "G-Z2X1053NFN"
};

// لا تعدّل ما تحت هذا السطر
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
