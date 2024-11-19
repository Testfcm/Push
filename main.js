// Firebase Messaging का आयात
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js";

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
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// सब्सक्रिप्शन के लिए बटन पर इवेंट हैंडलर जोड़ें
document.getElementById("subscribe").addEventListener("click", () => {
  Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        // FCM Token प्राप्त करें
        getToken(messaging, {
          vapidKey: "BK_UUPiZwvmHO_PAkBWBt5VQdpaOPu1e8950c-SXIyBf_vPIYgeWQsg0N9J8Wr3dByV8Ij8lnHksvie0mgbUeV0",
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log("FCM Token:", currentToken);
              // यहां आप सर्वर पर टोकन भेज सकते हैं
            } else {
              console.error("कोई टोकन उपलब्ध नहीं है।");
            }
          })
          .catch((err) => {
            console.error("टोकन प्राप्त करते समय त्रुटि हुई:", err);
          });
      } else {
        console.error("पर्मिशन प्राप्त नहीं हुई।");
      }
    })
    .catch((error) => {
      console.error("पर्मिशन त्रुटि:", error);
    });
});

// इनकमिंग मैसेज को हैंडल करें
onMessage(messaging, (payload) => {
  console.log("मेसेज प्राप्त हुआ:", payload);
});
