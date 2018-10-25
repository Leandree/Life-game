 $(document).ready(function (e) {

 	var nbLignes;
 	var nbColonnes;
 	var i, j, g;
 	var nbCases;

 	$('#testbtn').on('click', function () {

 		nbLignes = $("#nbLignes").val();
 		nbColonnes = $("#nbColonnes").val();
 		nbGeneration = $("#nbGeneration").val();

 		for(i = 0; i < nbLignes; i++){

 			//console.log(i);
 			$("#table").append("<tr id='L" + i + "'>");

 			for(j = 0; j < nbColonnes; j ++){

 				//console.log(j);

 				$("#table").append("<td class='case whiteCase' id='C" + i + j + "'></td>");


 			}

 			$("#table").append("</tr>");

 		}

 	});



 	$('#table').on('click', 'td.case', function () {
    	console.log('test');
    	if($(this).hasClass("blackCase")){
    		$(this).removeClass("blackCase");
    		$(this).addClass("whiteCase");
    	}
    	else{
    		$(this).removeClass("whiteCase");
    		$(this).addClass("blackCase");
    	}
    	
	});


	$('#launchbtn').on('click', function () {

		$("#copietable").empty();
		$('#table').clone().appendTo("#copietable");
		
		calcul();
		

 	});


 	function calcul(){
 		

		//console.log("ok");


					for(i=0;i<nbLignes;i++){

						for(j=0;j<nbColonnes;j++){

							nbCases = 0;


							if(i!=0){
								nbCases += testBlackCase((i-1),j);
							}
							if(j!=0){
								nbCases += testBlackCase(i,(j-1));
							}
							if(j!=0 && i!=0){
								nbCases += testBlackCase((i-1),(j-1));
							}
							if(i!=nbLignes-1){
								nbCases += testBlackCase((i+1),j);
							}
							if(j!=nbColonnes-1){
								nbCases += testBlackCase(i,(j+1));
							}
							if(i!=nbLignes-1 && j!=nbColonnes-1){
								nbCases += testBlackCase((i+1),(j+1));
							}
							if(i!=0 && j!=nbColonnes-1){
								nbCases += testBlackCase((i-1),(j+1));
							}
							if(i!=nbLignes-1 && j!=0){
								nbCases += testBlackCase((i+1),(j-1));
							}

							console.log(nbCases);


							if($("#copietable #C"+i+j).hasClass("blackCase")){

									if(nbCases < 2 || nbCases > 3){
										$("#C"+i+j).removeClass("blackCase");
			    						$("#C"+i+j).addClass("whiteCase");
									}
							}
							else{
								if(nbCases == 3){
									$("#C"+i+j).removeClass("whiteCase");
			    					$("#C"+i+j).addClass("blackCase");
								}
							}
							//$("#C"+i+j).css("background-color")
						}

					}

					repeat();

			
 	}


 	function repeat(){

 		$("#copietable").empty();
		$('#table').clone().appendTo("#copietable");

 		setTimeout(calcul, 200);


 	}


 	function testBlackCase(i,j){

 		if($("#copietable #C"+i+j).hasClass("blackCase")){
 			return 1
 		}
 		else{
 			return 0
 		}
 	}

 	
 });