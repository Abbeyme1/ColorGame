var numsquares = 6;
var colors = generateRandomColors(numsquares);
var modeButton = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorcode = document.querySelector("#colorcode");
colorcode.textContent = pickedColor;
var message = document.getElementById("message");

for(var i=0;i<modeButton.length;i++)
{
	modeButton[i].addEventListener("click",function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ?numsquares=3:numsquares=6;
		reset();
	})}
//easy.addEventListener("click",function() {
//	easy.classList.add("selected");
//	hard.classList.remove("selected");
//	numsquares = 3;
//	colors = generateRandomColors(numsquares);
//	pickedColor = pickColor();
//	colorcode.textContent = pickedColor;
//	for(var i=0;i<squares.length;i++)
//		{
//			if(colors[i]){
//				squares[i].style.backgroundColor = colors[i];
//			}
//			else{
//				squares[i].style.display = "none";
//			}
//		}
//})
//hard.addEventListener("click",function() {
//	hard.classList.add("selected");
//	easy.classList.remove("selected");
//	numsquares = 6;
//	colors = generateRandomColors(numsquares);
//	pickedColor = pickColor();
//	colorcode.textContent = pickedColor;
//	for(var i=0;i<squares.length;i++)
//		{
//				squares[i].style.backgroundColor = colors[i];
//				squares[i].style.display = "block"
//			}
//			
//		})
function reset() {
	colors = generateRandomColors(numsquares);
	pickedColor=pickColor();
	resetButton.textContent = "NewColor";
	colorcode.textContent = pickedColor;
	message.textContent = "";
	for(var i=0 ; i<squares.length; i++)
{
			if(colors[i]){
				squares[i].style.display = "block";
				squares[i].style.backgroundColor=colors[i];
			}
			else{
				squares[i].style.display = "none";
			}
}
	h1.style.backgroundColor = "steelblue";
}
resetButton.addEventListener("click",function() {
	reset();
})
for(var i=0 ; i<squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor === pickedColor)
			{message.textContent = "Correct!";
			 changeColor(pickedColor);
			 h1.style.background = pickedColor;
			 resetButton.textContent = "PlayAgain"
			 }
		else
			{
				this.style.backgroundColor= "#232323";
				message.textContent = "TryAgain";
			}
		console.log(clickedColor,pickedColor);
		})
}

function changeColor(color){
for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	for(var i=0 ; i < num ; i++)
		{
			arr.push(randomColor())
		}
	return arr;
} 
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ","+" " + g + ","+" " + b + ")";
}



