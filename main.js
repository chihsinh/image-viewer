//get image from doc
var myImage = document.getElementById("display");

//put images in array
var pics = ['https://images.unsplash.com/photo-1603998959580-bf66914f74b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1576&q=80', 
'https://images.unsplash.com/photo-1613411278236-3f04adfb6fdb?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHJuU0tESHd3WVVrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
'https://images.unsplash.com/photo-1506499802526-830edae0cb9a?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fHJuU0tESHd3WVVrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
'https://images.unsplash.com/photo-1558461724-516de1ec7e6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'];

var urls = ['https://unsplash.com/photos/5FhUVyBhFgA', 'https://unsplash.com/photos/xx__AEb46Bs', 'https://unsplash.com/photos/QXBJ1G3DEWQ', 'https://unsplash.com/photos/6fJ6GTtIWO4']


//get source text from doc
var source = document.querySelector('a');

var i = 0;

//function for changing the content
function changeContent(i) {
	//set images as source of myImage
	myImage.src = pics[i];
	//set urls as source text
	source.innerText = urls[i];
	//click on the url to go to reference page
	source.href = urls[i];
}

changeContent(i);

//get buttons
var previous = document.getElementById("previous");
var next = document.getElementById("next");

previous.disabled = true;
previous.classList.add('disabled');

//set events
next.addEventListener("click", function() {
	//go to next image
	if (i != urls.length - 1) {
		i = i + 1;
		changeContent(i);
		if (previous.disabled == true) {
			previous.disabled = false;
			previous.classList.remove('disabled');
		}
		if (i == urls.length - 1) {
			next.disabled = true;
			next.classList.add('disabled');
		}
	}
});

previous.addEventListener("click", function() {
	//go to previous image
	if (i != 0) {
		i = i - 1;
		changeContent(i);
		if (next.disabled == true) {
			next.disabled = false;
			next.classList.remove('disabled');
		}
		if (i == 0) {
			previous.disabled = true;
			previous.classList.add('disabled');
		}
	}	
});
