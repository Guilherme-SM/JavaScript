$(document).ready(function() {
	

});

var cronos = {}

$(function() {

	cronos = setInterval(loop,11);

});
var mil = 0;
var seg = 0;
var min = 10;

function loop() {
	inicia();
}
function inicia() {

	$("#cronometro").html("<p>Tempo: "+ min +":"+ seg +":"+ mil +"  </p>");
	mil--;
	if (mil <= 0){
		mil = 100;
		seg--;
	}
	if (seg <= 0){
		seg = 59;
		min--;
	}
	if (min <= 0){
		min = 0;
	}
}
