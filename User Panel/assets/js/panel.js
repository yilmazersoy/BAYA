$("#panel-menu li").click(function(){
    if(!$(this).hasClass("active")){
        $("#loading").fadeIn();
        $("#panel-menu li").removeClass("active");
        $(this).addClass("active");
        
        if($(this).attr("content") == 1){
            $("#panel-content").load("index.html");
        }
        
        if($(this).attr("content") == 5){
            $("#panel-content").load("center.html");
        }
    }
});

$("#panel-logout button").click(function(){
    $("#success").fadeIn();
});