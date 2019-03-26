// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCjT8cbUKEdC-j1MRcMGNRrlpeI_EMNgyo",
    authDomain: "contactform-4878a.firebaseapp.com",
    databaseURL: "https://contactform-4878a.firebaseio.com",
    projectId: "contactform-4878a",
    storageBucket: "",
    messagingSenderId: "171091117115"
  };
  firebase.initializeApp(config);


// Reference message collection
var messagesRef = firebase.database().ref('messages');


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit Form
function submitForm(e) {
	e.preventDefault();

	// Get Values
	var name = getInputVal('name');
	var email = getInputVal('email');
	var phone = getInputVal('phone');
	var message = getInputVal('message');

	// Save Message
	saveMessage(name, email, phone, message);

	// Show message alert
	document.querySelector('.message').style.display = 'block';

	// Hide alert after 3 seconds
	setTimeout(function() {
		document.querySelector('.message').style.display = 'none';
	},3000);

	// Clear form values
	document.getElementById('contactForm').reset();
}


// Function to get form value
function getInputVal(id) {
	return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		phone: phone,
		message: message
	})
}