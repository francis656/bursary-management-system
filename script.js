// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').classList.add('d-none');
    document.getElementById('applicationSection').classList.remove('d-none');
});

// Countdown timer
var countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 30);
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Congratulation popup after application
document.getElementById('bursaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Congratulations! Your application has been submitted.");
});
