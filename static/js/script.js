function copyTitle(button) {
// Get the parent element of the button (the "feature-main" element)
const featureMain = button.parentElement;

const title = featureMain.querySelector('.title-main').textContent;
const tempInput = document.createElement('input');
tempInput.value = title;
document.body.appendChild(tempInput);
tempInput.select();
document.execCommand('copy');
document.body.removeChild(tempInput);
const notification = document.getElementById('notification');
notification.style.display = 'block';
const notificationText = document.getElementById('notification-text');
notificationText.textContent = title;
setTimeout(function() {
notification.style.display = 'none';
}, 2000);
}