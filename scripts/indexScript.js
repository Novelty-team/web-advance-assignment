//audio
var birds = document.getElementById("birds");
var noisey = document.getElementById("noisey");
var rain = document.getElementById("rain");
var badresult = document.getElementById("badresult");
var applause = document.getElementById("applause");
//Error
var nameStarError = document.getElementById("nameStarError");
var nameError = document.getElementById("nameError");
var firstStarError = document.getElementById("firstStarError");
var firstError = document.getElementById("FirstError");
var secondStarError = document.getElementById("secondStarError");
var secondError = document.getElementById("secondError");
var finalStarError = document.getElementById("finalStarError");
var finalError = document.getElementById("finalError");
var participationStarError = document.getElementById("participationStarError");
var participationError = document.getElementById("participationError");
var absenceError = document.getElementById("absenceError");
var needEffort = document.getElementById("needEffort");
var greatEffort = document.getElementById("greatEffort");
var allField = document.getElementById("allField");

//list
var list = [] ;
var nameErrorEE = false;
var firstErrorEE = false;
var secondErrorEE = false;
var finalErrorEE = false;
var participationErrorEE = false;
var absenceErrorEE = false;
function start(){
	//localStorage.clear();

	if (localStorage.getItem("list") != null)
	 list = JSON.parse(localStorage.getItem("list"));
	
	birds.play();
}

function compute(){
	
	var radio = document.getElementsByName("r");
	var first = document.getElementById("fi");
	var name = document.getElementById("name");
	var reslt = document.getElementById("reslt");
	reslt.value = "";
	var second = document.getElementById("se");
	var final = document.getElementById("fn");
	var participation = document.getElementById("p");
	var radioVal = -1 ;
	for(i = 0; i < radio.length; i++) { 
		if(radio[i].checked) 
		radioVal = radio[i].value; 
	} 
	if (radioVal == -1){
		absenceErrorEE = true;
		absenceError.style.display = "block";
	}else{
		absenceErrorEE = false;
		absenceError.style.display = "none";
	}
	if (!nameErrorEE && !firstErrorEE && !secondErrorEE && !finalErrorEE && !participationErrorEE && !absenceErrorEE){
		if (!(name.value == "") && !(first.value == "") && !(second.value == "") && !(final.value == "") && !(participation.value == "") && !(name.value == -1)){
			allField.style.display = "none";

			var totalMark = parseInt(first.value) + parseInt(second.value) + parseInt(final.value) + parseInt(participation.value) ;
			if (radioVal == 2){
				reslt.value = name.value + "     Total = " + totalMark + ",     Grade = F";
				greatEffort.style.display = "none";
				needEffort.style.display = "block";
				reslt.style.backgroundColor = "red";
				reslt.style.color = "white";
				badresult.play();
				var sutdent = {name:name.value , first:first.value , second:second.value , final:final.value , participation:participation.value ,absences:"No" , grade:'F' };
				list.push(sutdent);
				localStorage.setItem("list", JSON.stringify(list));
			}else{
				var gradee ;
				if (totalMark > 90)
					gradee = 'A';
				else if (totalMark >= 80)
					gradee = 'B';
				else if (totalMark >= 70)
					gradee = 'C';
				else if (totalMark > 60)
					gradee = 'D';
				else if (totalMark >= 41)
					gradee = 'E';
				else
					gradee = 'F';

				if (gradee == 'F'){
					reslt.value = name.value + "     Total = " + totalMark + ",     Grade = " +gradee;
					greatEffort.style.display = "none";
					needEffort.style.display = "block";
					reslt.style.backgroundColor = "red";
					reslt.style.color = "white";
					badresult.play();
					var sutdent = {name:name.value , first:first.value , second:second.value , final:final.value , participation:participation.value ,absences:"Yes" , grade:gradee };
					list.push(sutdent);
					localStorage.setItem("list", JSON.stringify(list));
				}
				if (gradee == 'A'){
					reslt.value = name.value + "     Total = " + totalMark + ",     Grade = "+gradee;
					needEffort.style.display = "none";
					greatEffort.style.display = "block";
					reslt.style.backgroundColor = "blue";
					reslt.style.color = "white";
					applause.play();
					var sutdent = {name:name.value , first:first.value , second:second.value , final:final.value , participation:participation.value ,absences:"Yes" , grade:gradee };
					list.push(sutdent);
					localStorage.setItem("list", JSON.stringify(list));
				}else{
					reslt.value = name.value + "     Total = " + totalMark + ",     Grade = "+gradee;
					needEffort.style.display = "none";
					greatEffort.style.display = "none";
					reslt.style.backgroundColor = "";
					reslt.style.color = "";
					var sutdent = {name:name.value , first:first.value , second:second.value , final:final.value , participation:participation.value ,absences:"Yes" , grade:gradee };
					list.push(sutdent);
					localStorage.setItem("list", JSON.stringify(list));
				}

			}

		}else{
			allField.style.display = "block";
			reslt.value="";
		}
	}
	// for(var i=0 ; i<list.length ; i++)
	// alert(list[i].name);
}

function inputFocus(){
	birds.pause();
	rain.play();
}

function inputBlur(){
	rain.pause();
	birds.play();
}

function nameChange(){
	var letters = /^[a-zA-Z ]+$/;
	var name = document.getElementById("name");
	if(!(name.value.match(letters))){
		nameErrorEE = true;
		nameError.style.display = "block";
		nameStarError.style.display = "block";
		name.style.borderColor = "red";
		birds.pause();
		noisey.play();
	}else{
		nameErrorEE = false;
		nameError.style.display = "none";
		nameStarError.style.display = "none";
		name.style.borderColor = "";
		noisey.pause();
		birds.play();
	}
	if (nameErrorEE || firstErrorEE || secondErrorEE || finalErrorEE || participationErrorEE ){
		birds.pause();
		noisey.play();
	}
}
function firstChange(){
	var first = document.getElementById("fi");
	if(first.value > 20 || first.value < 0){
		firstErrorEE = true;
		firstError.style.display = "block";
		firstStarError.style.display = "block";
		first.style.borderColor = "red";
		birds.pause();
		noisey.play();
	}else{
		firstErrorEE = false;
		firstError.style.display = "none";
		firstStarError.style.display = "none";
		first.style.borderColor = "";
		noisey.pause();
		birds.play();
	}
	if (nameErrorEE || firstErrorEE || secondErrorEE || finalErrorEE || participationErrorEE ){
		birds.pause();
		noisey.play();
	}
}
function secondChange(){
	var second = document.getElementById("se");
	if(second.value > 20 || second.value < 0){
		secondErrorEE = true;
		secondError.style.display = "block";
		secondStarError.style.display = "block";
		second.style.borderColor = "red";
		birds.pause();
		noisey.play();
	}else{
		secondErrorEE = false;
		secondError.style.display = "none";
		secondStarError.style.display = "none";
		second.style.borderColor = "";
		noisey.pause();
		birds.play();
	}
	if (nameErrorEE || firstErrorEE || secondErrorEE || finalErrorEE || participationErrorEE ){
		birds.pause();
		noisey.play();
	}
}
function finalChange(){
	var final = document.getElementById("fn");
	if(final.value > 50 || final.value < 0){
		finalErrorEE = true;
		finalError.style.display = "block";
		finalStarError.style.display = "block";
		final.style.borderColor = "red";
		birds.pause();
		noisey.play();
	}else{
		finalErrorEE = false;
		finalError.style.display = "none";
		finalStarError.style.display = "none";
		final.style.borderColor = "";
		noisey.pause();
		birds.play();
	}
	if (nameErrorEE || firstErrorEE || secondErrorEE || finalErrorEE || participationErrorEE ){
		birds.pause();
		noisey.play();
	}
}
function participationChange(){
	var participation = document.getElementById("p");
	if(participation.value > 10 || participation.value < 0){
		participationErrorEE = true;
		participationError.style.display = "block";
		participationStarError.style.display = "block";
		participation.style.borderColor = "red";
		birds.pause();
		noisey.play();
	}else{
		participationErrorEE = false;
		participationError.style.display = "none";
		participationStarError.style.display = "none";
		participation.style.borderColor = "";
		noisey.pause();
		birds.play();
	}
	if (nameErrorEE || firstErrorEE || secondErrorEE || finalErrorEE || participationErrorEE){
		birds.pause();
		noisey.play();
	}
}

window.addEventListener("load",start,false);
