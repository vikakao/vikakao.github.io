var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");

var pickedColor=pickColor();
var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");

var newcolors = document.querySelector("#again");

var hard = document.querySelector("#hard");
var easy = document.querySelector("#easy");

colorDisplay.textContent=pickedColor;

newcolors.addEventListener("click", function() {
	
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	
	colorDisplay.textContent = pickedColor;
	
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	if (newcolors.textContent == "PLAY AGAIN?") {
		window.location.reload();
	}
});

hard.addEventListener("click", function() {
	hard.classList.add("selected");
	easy.classList.remove("selected");
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

easy.addEventListener("click", function() {
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

for (var i=0; i< squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.backgroundColor;

		if(clickedColor === pickedColor) {
			messageDisplay.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			newcolors.textContent = "PLAY AGAIN?";
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}

	});
}
function changeColors(color){
	for (var i =0; i < squares.length; i++) {
	squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = []

	for (var i = 0; i < num; i++ ){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}