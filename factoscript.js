// =========  Declarar variables y función    ================ //

$("#button").click(function() {
	var num = $("#txtdata").val();
		alert("el factorial de " + num + " " + "es " + esFactorial(num));
	})

function esFactorial(num){

		if(num === 1 || num == 0) {
	  return 1; 

	 } else { 

	 	return num * (esFactorial(num -1));		
	 }
 }