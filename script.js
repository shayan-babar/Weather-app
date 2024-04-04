function updateDateTime() {
    var dateContainer = document.getElementById('date');
    var timeContainer = document.getElementById('time');
    var now = new Date();
    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();
    dateContainer.textContent = 'Date: ' + date;
    timeContainer.textContent = 'Time: ' + time;
}
updateDateTime();
// Update the date and time every second
setInterval(updateDateTime, 1000);
