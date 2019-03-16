// Initialize Firebase
var config = {
	apiKey: "AIzaSyCBjx_PWAdkgmx-9GzzhMCe_XbJHJw4BKk",
	authDomain: "contactform-2ac63.firebaseapp.com",
	databaseURL: "https://contactform-2ac63.firebaseio.com",
	projectId: "contactform-2ac63",
	storageBucket: "contactform-2ac63.appspot.com",
	messagingSenderId: "461823526085"
};
firebase.initializeApp(config);


// Reference messages collection
var messageRef = firebase.database().ref('messages');


// Listen to Submit Button
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
}


// Get Form Values
function getInputVal(id) {
	return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
	var newMessageRef = messageRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		phone: phone,
		message: message
	})
}