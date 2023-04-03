// ** VARIABLES

// ** DOM READY
$(function () {
	console.log('dom ready');
	
	$("#fermeture").click(function(){
	
			$("#jean").hide();
            $("#fermeture").hide();
            $("#bouton").hide();
            $("#bouture").hide();
			$("#japon").show();
	

	});
    $("#bouture").click(function(){
	
        $("#jean").hide();
        $("#fermeture").hide();
        $("#bouton").hide();
        $("#bouture").hide();
        $("#australie").show();
    });
    $("#bouton").click(function(){
	
        $("#jean").hide();
        $("#fermeture").hide();
        $("#bouton").hide();
        $("#bouture").hide();
        $("#rdc").show();
    });

    $("#japon").click(function(){
	
        $("#jean").show();
        $("#fermeture").show();
        $("#bouton").show();
        $("#bouture").show();
        $("#japon").hide();
    });

	$("#australie").click(function(){
	
        $("#jean").show();
        $("#fermeture").show();
        $("#bouton").show();
        $("#bouture").show();
        $("#australie").hide();
    });
    $("#rdc").click(function(){
	
        $("#jean").show();
        $("#fermeture").show();
        $("#bouton").show();
        $("#bouture").show();
        $("#rdc").hide();
    });
});
// ** FUNCTIONS