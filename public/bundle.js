(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const notify = require('./notification.js');
const notifyButton = document.getElementById('notifyButton');
notifyButton.addEventListener("click", () => notify());

},{"./notification.js":2}],2:[function(require,module,exports){
module.exports = function () {
    var notification = null;
    console.log('notification')
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
    }
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        console.log('Notification.permission === granted');
        notification = new Notification('Electron Notification', {
            'body': 'Notification is coming to townnnn',
            'icon': 'http://placekitten.com/300/300'
        });
    }
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        console.log('Notification.permission !== denied');
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

},{}]},{},[1]);
