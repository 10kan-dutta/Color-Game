var numSquare = 6;
var colors= generateColor(numSquare);

var square=document.querySelectorAll(".square");
var picked= pickColor();
var colorDisplay=document.getElementById('colorDisplay');
colorDisplay.textContent=picked;
var message= document.getElementById('message');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	numSquare = 3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateColor(numSquare);
	picked = pickColor();
	colorDisplay.textContent=picked;

	for(var i=0;i<square.length;i++){
		if(colors[i]){
	square[i].style.backgroundColor=colors[i];
	}else{
		square[i].style.display="none";
	}

   }

});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquare = 6;
	colors = generateColor(numSquare);
	picked = pickColor();
	colorDisplay.textContent=picked;

	for(var i=0;i<square.length;i++){

	square[i].style.backgroundColor=colors[i];
	square[i].style.display="block";

	}

});

resetButton.addEventListener("click", function(){
	colors = generateColor(numSquare);
	picked = pickColor();
	colorDisplay.textContent = picked;
	message.textContent ="";
	this.textContent = "New Color";

	for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];
   }

	 h1.style.backgroundColor = "steelblue";  

});

for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];

	square[i].addEventListener("click",function(){
		var clickedColor= this.style.backgroundColor;
		if(picked=== clickedColor){
			message.textContent= "Correct";
			changecolors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent= "Play Again";
		}else{
			this.style.backgroundColor= "#232323";
			message.textContent = "Try Again";
		}
	});
}

function changecolors(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
   var random =	Math.floor(Math.random() * colors.length);
   return colors[random];
}
function generateColor(num) {
	var arr = [];

	for(var i=0; i<num ; i++){
	arr.push(randomColor());
	}

	return arr; 
}

function randomColor() {
	 var r= Math.floor(Math.random() * 256);
	 var g= Math.floor(Math.random() * 256);
	 var b= Math.floor(Math.random() * 256);

	return "rgb(" + r +", "+g +", "+b +")";
}