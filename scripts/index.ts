const notify = require('../compiledJS/scripts/notification.js')
const notifyButton = document.getElementById('notifyButton')
notifyButton.addEventListener("click", (): void => notify())