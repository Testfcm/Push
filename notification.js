// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, requestPermission } from "firebase/messaging";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB5SvT1nvmUxR2E26pfcJ9yBzpL0VfBBM",
    authDomain: "wordpress-7d715.firebaseapp.com",
    databaseURL: "https://wordpress-7d715.firebaseio.com", // Make sure your database URL is correct
    projectId: "wordpress-7d715",
    storageBucket: "wordpress-7d715.appspot.com",
    messagingSenderId: "825792468964",
    appId: "1:825792468964:web:02e8183833e34424f699f1",
    measurementId: "G-HCB0DYTB59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request permission for notifications
messaging.requestPermission()
    .then(() => {
        // Get the FCM token
        return getToken(messaging, { vapidKey: "BK_UUPiZwvmHO_PAkBWBt5VQdpaOPu1e8950c-SXIyBf_vPIYgeWQsg0N9J8Wr3dByV8Ij8lnHksvie0mgbUeV0" });
    })
    .then((token) => {
        // If a token is received, send it to your server
        if (token) {
            console.log('FCM Token:', token);
            fetch('https://phpnot-97be7.firebaseio.com/pushtokens/' + token + '.json', {
                method: 'PUT',
                body: JSON.stringify(true),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(response => {
                console.log('Token saved:', response);
            }).catch(error => {
                console.error('Error saving token:', error);
            });
        }
    })
    .catch((err) => {
        console.error('Permission denied or error:', err);
    });