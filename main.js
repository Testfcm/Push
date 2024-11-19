import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js";

// Initialize Firebase Messaging
const messaging = getMessaging();

// Request permission for notifications
Notification.requestPermission()
  .then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      // Get FCM token with VAPID key
      getToken(messaging, {
        vapidKey: "BK_UUPiZwvmHO_PAkBWBt5VQdpaOPu1e8950c-SXIyBf_vPIYgeWQsg0N9J8Wr3dByV8Ij8lnHksvie0mgbUeV0",
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log("FCM Token:", currentToken);
          } else {
            console.error("No registration token available. Request permission to generate one.");
          }
        })
        .catch((err) => {
          console.error("An error occurred while retrieving token.", err);
        });
    } else {
      console.error("Unable to get permission to notify.");
    }
  })
  .catch((error) => {
    console.error("Notification permission error:", error);
  });

// Handle incoming messages
onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
});
