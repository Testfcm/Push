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

// Retrieve Firebase Messaging object
const messaging = firebase.messaging();

// Request notification permission
function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      getToken();
    } else {
      console.error('Unable to get permission to notify.');
    }
  });
}

// Get FCM token
function getToken() {
  messaging.getToken({ vapidKey: 'YOUR_PUBLIC_VAPID_KEY_HERE' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('FCM Token:', currentToken);
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((error) => {
      console.error('An error occurred while retrieving token.', error);
    });
}

// Handle token refresh
messaging.onTokenRefresh(() => {
  messaging.getToken({ vapidKey: 'YOUR_PUBLIC_VAPID_KEY_HERE' })
    .then((refreshedToken) => {
      console.log('Token refreshed.');
      console.log('New token:', refreshedToken);
    })
    .catch((error) => {
      console.error('Unable to retrieve refreshed token', error);
    });
});

// Handle subscription button click
document.getElementById('subscribe').addEventListener('click', () => {
  requestPermission();
});

// Handle unsubscribe button click
document.getElementById('unsubscribe').addEventListener('click', () => {
  messaging.deleteToken().then(() => {
    console.log('Token deleted.');
  }).catch((error) => {
    console.error('Unable to delete token.', error);
  });
});
