export function showNotif(status, start, notif) {
  if (Notification.permission === "granted") {
    let { title, body } = start ? notif[status].start : notif[status].end;

    const options = {
      body: body,
    };

    navigator.serviceWorker.getRegistration().then(function (registration) {
      registration.showNotification(title, options);
    });
  } else {
    console.error("Notification denied");
  }
}
