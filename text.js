/*var button=document.querySelector("button");
var ispurple=false;
button.addEventListener("click", function(){
	if(ispurple)
	{
	button.style.background="white";	
	}
	else{
		utton.style.background="purle";
	}
	
});*/
var button = document.querySelector("button");
 var isPurple = false;


 button.addEventListener("click", check);
 function check(){
 	if(isPurple){
 		document.body.style.background = "white";
 	} else {
 		document.body.style.background = "purple";
 	}
 	isPurple = !isPurple;
}


//button.addEventListener("click", function(){
//	document.body.classList.toggle("purple");
//});