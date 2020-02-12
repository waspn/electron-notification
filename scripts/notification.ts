module.exports = function () {
    var notification = null;
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
    }
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        notification = new Notification('Electron Notification', {
            'body': 'Notification is coming to townnnn',
            'icon': 'http://placekitten.com/300/300'
        });
    }
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                notification = new Notification('Electron Notification', {
                    'body': 'Notification is coming to townnnn',
                    'icon': 'http://placekitten.com/300/300'
                });
            }
        });
    }
    notification.onclick = function (event) {
        console.log('event1', event);
        console.log('NOTIFICATION IS CLICKED, DO SoMETHING');
    };
};
