self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'No payload',
    icon: 'icon.png',
  };

  event.waitUntil(self.registration.showNotification('New Push Notification', options));
});
