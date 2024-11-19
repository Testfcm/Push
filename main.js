// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB5SvT1nvmUxR2E26pfcJ9yBzpL0VfBBM",
  authDomain: "wordpress-7d715.firebaseapp.com",
  projectId: "wordpress-7d715",
  storageBucket: "wordpress-7d715.firebasestorage.app",
  messagingSenderId: "825792468964",
  appId: "1:825792468964:web:02e8183833e34424f699f1",
  measurementId: "G-HCB0DYTB59"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging
const messaging = firebase.messaging();

// Request permission for notifications
function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getToken();
      } else {
        console.log('Unable to get permission.');
      }
    });
}

// Get FCM Token
function getToken() {
  messaging.getToken({ vapidKey: 'YOUR_PUBLIC_VAPID_KEY_HERE' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('FCM Token:', currentToken);
      } else {
        console.log('No token available. Request permission again.');
      }
    })
    .catch((err) => {
      console.error('An error occurred while retrieving token.', err);
    });
}

// Subscribe button
document.getElementById('subscribe').addEventListener('click', () => {
  requestPermission();
});

// Unsubscribe button
document.getElementById('unsubscribe').addEventListener('click', () => {
  messaging.deleteToken()
    .then(() => {
      console.log('Token deleted.');
    })
    .catch((err) => {
      console.error('Unable to delete token.', err);
    });
});

// Handle token refresh
messaging.onTokenRefresh(() => {
  messaging.getToken({ vapidKey: 'YOUR_PUBLIC_VAPID_KEY_HERE' })
    .then((refreshedToken) => {
      console.log('Token refreshed:', refreshedToken);
    })
    .catch((err) => {
      console.error('Unable to retrieve refreshed token.', err);
    });
});
