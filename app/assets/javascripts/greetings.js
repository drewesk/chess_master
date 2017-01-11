var today = new Date();
var currentHour = today.getHours();
var greeting;

if (currentHour > 18) {
	greeting = "It's past " + currentHour + 'pm, Good Evening.';
} else if (currentHour > 12) {
	greeting = "It's past " + currentHour + 'pm, Good Afternoon.';
} else if (currentHour > 5) {
	greeting = "It's past " + currentHour + 'am, Rise and Shine!';
} else {
	greeting = "It's past " + currentHour + 'am, Burn the mid-night oil!';
}

var greeting_element = document.getElementById('greets_user');
greeting_element.textContent = greeting;
