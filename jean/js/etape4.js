// ** VARIABLES

// ** DOM READY
$(function () {
	console.log('dom ready');
	
    $("#fermeture").click(function(){
	
        $("#jean").hide();
        $("#fermeture").hide();
        $("#bouton").hide();
        $("#bouture").hide();
        $("#souris2").hide();
        $("#souris1").hide();
        $("#souris").hide();
        $("#japon").show();
    });
    $("#bouture").click(function(){
	
        $("#jean").hide();
        $("#fermeture").hide();
        $("#bouton").hide();
        $("#bouture").hide();
        $("#souris2").hide();
        $("#souris1").hide();
        $("#souris").hide();
        $("#australie").show();
    });
    $("#bouton").click(function(){
	
        $("#jean").hide();
        $("#fermeture").hide();
        $("#bouton").hide();
        $("#bouture").hide();
        $("#souris2").hide();
        $("#souris1").hide();
        $("#souris").hide();
        $("#rdc").show();
    });

    $("#japon").click(function(){
	
        $("#japon").hide();
        $("#jean").show();
        $("#fermeture").show();
        $("#bouton").show();
        $("#souris2").show();
        $("#souris1").show();
        $("#souris").show();
        $("#bouture").show();
       
    });

	$("#australie").click(function(){
	
        $("#jean").show();
        $("#fermeture").show();
        $("#bouton").show();
        $("#bouture").show();
        $("#souris2").show();
        $("#souris1").show();
        $("#souris").show();
        $("#australie").hide();
    });
    $("#rdc").click(function(){
	
        $("#jean").show();
        $("#fermeture").show();
        $("#bouton").show();
        $("#bouture").show();
        $("#souris2").show();
        $("#souris1").show();
        $("#souris").show();
        $("#rdc").hide();
    });
});
// ** FUNCTIONS