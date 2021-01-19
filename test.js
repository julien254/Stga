var secondeCompteur = 0;
var minuteCompteur = 0;
var check = false;
var i = 0;
function compteur() {

	if(check){
	
	
		function print(num) {
			document.getElementById("span").textContent = minuteCompteur+':'+num;
		}
		if (secondeCompteur === 0) {
			print("00");
		}
		else if (secondeCompteur === 1) {
			print("01");
		}
		else if (secondeCompteur === 2) {
			print("02");
		}
		else if (secondeCompteur === 3) {
			print("03");
		}
		else if (secondeCompteur === 4) {
			print("04");
		}
		else if (secondeCompteur === 5) {
			print("05");
		}
		else if (secondeCompteur === 6) {
			print("06");
		}
		else if (secondeCompteur === 7) {
			print("07");
		}
		else if (secondeCompteur === 8) {
			print("08");
		}
		else if (secondeCompteur === 9) {
			print("09");
		}
		else {
			print(secondeCompteur);
		}
		if (secondeCompteur === 59){
			secondeCompteur = 0;
			minuteCompteur += 1;
		}
		else {
			secondeCompteur += 1;
		}
	}

}

function recupDate() {

	check = true;
	var date = new Date();
	
	var jour = date.getDate();
	
	var mois = date.getMonth();
	mois = 1 + mois;
	
	var annee = date.getFullYear();
	
	var heure = date.getHours();
	
	var minute = date.getMinutes();
	
	if (jour < 10) {
		jour = "0" + jour;
	}
	if (mois < 10) {
		mois = "0" + mois;
	}
	if (heure < 10) {
		heure = "0"+ heure;
	}
	if (minute < 10) {
		minute = "0"+ minute;	
	}
	document.getElementById("jsDate1").textContent = jour+'/'+mois+'/'+annee;
	document.getElementById("jsHeure1").textContent = heure+':'+minute;
	document.getElementById("jsDate2").textContent = jour+'/'+mois+'/'+annee;
	if(heure === "00") {	
		heure = "01";	
	}
	else if(heure === "01") {
		heure = "02";
	}	
	else if(heure === "02") {	
		heure = "03";
	}
	else if(heure === "03") {
		heure = "04";
	}
	else if(heure === "04") {
		heure = "05";
	}
	else if(heure === "05") {
		heure = "06";
	}
	else if(heure === "06") {
		heure = "07";
	}
	else if(heure === "07") {
		heure = "08";
	}
	else if(heure === "08") {
		heure = "09";
	}
	else if(heure === "23") {
		heure = "00";
	}
	else {
		heure += 1;
	}
	document.getElementById("jsHeure2").textContent = heure+':'+minute;
	document.getElementById("dateControle").textContent = jour+'/'+mois+'/'+annee;
	document.getElementById("jsHeure3").textContent = heure+':'+minute;
	if (i === 0) {
		compteur();
		var interval = setInterval(compteur, 1000);
	}
	i++;
	var x = document.getElementById("baliseCharge");
	x.classList.add('animeCharge');
	var y = document.getElementById("baliseBoule");
	y.classList.add('animeBouleEnd');
	y.style.animationIterationCount = "infinite";
	
}

function moveBoule(event) {
	
	if (check) {
	
		var posX = event.touches[0].clientX;
		var posY = event.touches[0].clientY;
		var boules = document.getElementById("baliseBoule");
		boules.style.top = (posY - 168 )+ "px";
		boules.style.left = (posX - 80 ) + "px";
		boules.style.animationDuration = "1000ms";
	
	}
}

function reset(){

	check = false;
	var x = document.getElementById("span");
	x.textContent = "0:00";
	minuteCompteur = 0;
	secondeCompteur = 0;
	var boule = document.getElementById("baliseBoule");
	boule.style.animationIterationCount = "0";
	document.getElementById("jsDate1").textContent = '00/00/00';
	document.getElementById("jsHeure1").textContent = '0:00';
	document.getElementById("jsDate2").textContent = '00/00/00';
	document.getElementById("jsHeure2").textContent = '0:00';
	document.getElementById("dateControle").textContent = '00/00/00';
	document.getElementById("jsHeure3").textContent = '0:00';
	var x = document.getElementById("baliseCharge");
	x.classList.remove('animeCharge');

}

function resetBoule() {

	var elem = document.getElementById("baliseBoule");
	elem.style.top = "26.5vw";
	elem.style.left = "27vw";
	elem.style.animationDuration = "3000ms";

}
