// auth.js
// Firebase App болон Auth SDK-уудыг ачаалласан байх шаардлагатай

const firebaseConfig = {
  apiKey: "AIzaSyDcQ4qCfrGuPJ9Nu7r9snQHM9_b7cp3ZzY",
  authDomain: "rps-online-c6862.firebaseapp.com",
  databaseURL: "https://rps-online-c6862-default-rtdb.firebaseio.com",
  projectId: "rps-online-c6862",
  storageBucket: "rps-online-c6862.firebasestorage.app",
  messagingSenderId: "879021175823",
  appId: "1:879021175823:web:11f69fc2305a8a2d1a1f7a",
  measurementId: "G-LYPNQHNJJT"
};

// Firebase-г initialize хийх (давхардаж initialize хийхээс сэргийлнэ)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

// Нэвтрэлтийн байдал шалгах
auth.onAuthStateChanged(user => {
  if (!user) {
    // Нэвтрээгүй бол home.html рүү чиглүүлнэ
    window.location.href = "../home.html";
  }
});
