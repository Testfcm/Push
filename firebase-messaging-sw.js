importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Your Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB5SvT1nvmUxR2E26pfcJ9yBzpL0VfBBM",
    authDomain: "wordpress-7d715.firebaseapp.com",
    projectId: "wordpress-7d715",
    storageBucket: "wordpress-7d715.appspot.com",
    messagingSenderId: "825792468964",
    appId: "1:825792468964:web:02e8183833e34424f699f1",
    measurementId: "G-HCB0DYTB59"
};

// Initialize Firebase in Service Worker
firebase.initializeApp(firebaseConfig);

// Handle Background Messages
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    // Customize notification
    const notificationTitle = payload.notification.title || 'Background Message';
    const notificationOptions = {
        body: payload.notification.body || 'Default body',
        icon: payload.notification.icon || '/icon.png'
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
