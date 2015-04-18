$(document).ready(function() {

var a=$("#primero-s").css("display");
var b=$("#segundo-s").css("display");
var c=$("#tercero-s").css("display");
var d=$("#cuarto-s").css("display");	
$('#inicio').click(function(evento) {
	uso=0
$('#segundo').fadeOut(0);
$('#baner-h').fadeIn(1000);
$('#baner-h').animate({
                               'margin-left':'0px'

                    },1500);

});
var  uso=0;
$('#uso').click(function() {
uso++;
	$('#baner-h').animate({
                               'margin-left':'2000px'

                    },1500);
$('#segundo').fadeOut(0);
$("#segundo-s").fadeOut(0);
$("#tercero-s").fadeOut(0);
$("#cuarto-s").fadeOut(0);
$("#baner-h").fadeOut(0);
$('#segundo').fadeIn(1000);
 var inicio = 0;

if (uso==1) {

	if (inicio==0) {
	$("#primero-s").fadeIn(1000);
	$("#primero-s").delay(4000).fadeOut(0);
	console.log('soy el cero');
	inicio++;
	if (inicio==1 && !$('#primero-s').is (':hidden')) {
		$("#segundo-s").delay(5000).fadeIn(1000);
		$("#segundo-s").delay(3000).fadeOut(0);
		console.log('soy el primero');
		inicio++;
			if (inicio==2 && b=="none") {
				$("#tercero-s").delay(9000).fadeIn(1000);
				$("#tercero-s").delay(3000).fadeOut(0);
				console.log('soy el segundo');
				inicio++;
					if (inicio==3 && c=="none") {
						$("#cuarto-s").delay(13000).fadeIn(1000);
						$("#cuarto-s").delay(3000).fadeOut(0);
						console.log('soy el tercero');
						inicio++;
					};

			};
	

	};	


};


};



// for (var inicio = 0; inicio < 4; inicio++) {


// 	switch(inicio){
// 		case 0:
// 			$("#primero-s").fadeIn(1000);
// 			$("#primero-s").delay(4000).fadeOut(0);
// 			console.log('soy el cero');
// 		break;
// 		case 1:
// 			$("#segundo-s").delay(4000).fadeIn(1000);
// 			$("#segundo-s").delay(3000).fadeOut(0);
// 			console.log('soy el primero');
// 		break;
// 		case 2:
// 			$("#tercero-s").delay(8000).fadeIn(1000);
// 			$("#tercero-s").delay(3000).fadeOut(0);
// 			console.log('soy el segundo');
// 		break;
// 		case 3:
// 			$("#cuarto-s").delay(12000).fadeIn(1000);
// 			$("#cuarto-s").delay(5000).fadeOut(0);
// 			console.log('soy el tercero');

// 		break;


// 	}


// };
 // $("4pri++ro-s").delay(300).fadeIn(000);
});
// culminado el uso

});