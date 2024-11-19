importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js");

// Firebase configuration with your details
const firebaseConfig = {
    apiKey: "AIzaSyBB5SvT1nvmUxR2E26pfcJ9yBzpL0VfBBM",
    authDomain: "wordpress-7d715.firebaseapp.com",
    projectId: "wordpress-7d715",
    storageBucket: "wordpress-7d715.firebasestorage.app",
    messagingSenderId: "825792468964", // Replace with your Messaging Sender ID
    appId: "1:825792468964:web:02e8183833e34424f699f1",
    measurementId: "G-HCB0DYTB59"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get Firebase Messaging instance
const messaging = firebase.messaging();

// Set Public VAPID Key with your new VAPID key
messaging.usePublicVapidKey("BK_UUPiZwvmHO_PAkBWBt5VQdpaOPu1e8950c-SXIyBf_vPIYgeWQsg0N9J8Wr3dByV8Ij8lnHksvie0mgbUeV0");