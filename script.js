// Countdown timer
const launchDate = new Date("2024-06-15T00:00:00").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Event has started!";
  }
}, 1000);

// Form submission
document.getElementById("registration-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  // You can perform further actions like sending the registration data to a server
  console.log("Name:", name);
  console.log("Email:", email);
  alert("Thank you for registering!");
});
