importScripts("https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js");

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB5SvT1nvmUxR2E26pfcJ9yBzpL0VfBBM",
  authDomain: "wordpress-7d715.firebaseapp.com",
  projectId: "wordpress-7d715",
  storageBucket: "wordpress-7d715.firebasestorage.app",
  messagingSenderId: "825792468964",
  appId: "1:825792468964:web:02e8183833e34424f699f1",
  measurementId: "G-HCB0DYTB59",
};

// Firebase ऐप को इनिशियलाइज़ करें
firebase.initializeApp(firebaseConfig);

// मैसेजिंग प्राप्त करें
const messaging = firebase.messaging();

// बैकग्राउंड मैसेज हैंडलर
messaging.onBackgroundMessage((payload) => {
  console.log("बैकग्राउंड में मेसेज प्राप्त हुआ:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
