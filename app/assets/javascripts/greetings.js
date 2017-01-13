var today = new Date();
var currentHour = today.getHours();
var greeting;

displayHour = ((currentHour + 11) % 12 + 1);


if (currentHour > 19) {
  greeting = "It's past " + displayHour + 'pm, is your name "Moon Owl"?';
} else if (currentHour > 17) {
  greeting = "It's past " + displayHour + 'pm, Good Evening.';
}
else if (currentHour > 12) {
  greeting = "It's past " + displayHour + 'pm, Good Afternoon.';
} else if (currentHour > 5) {
  greeting = "It's past " + displayHour + 'am, Rise and Shine!';
} else {
  greeting = "It's past " + displayHour + 'am, Burn the mid-night oil!';
}

var greeting_element = document.getElementById('greets_user');
greeting_element.textContent = greeting;
