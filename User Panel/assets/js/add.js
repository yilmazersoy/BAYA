$("#add-submit").click(function(){
    if($("#county").val() != "" && $("#district").val() != "" && $("#street").val() != "" && $("#centername").val() != "" && $("#category").val()){
        $("#loading").fadeIn();
        $.ajax({
            url: "https://geocode.maps.co/search?" + "street=" + $("#street").val().toLowerCase() + "&county=" + $("#county").val().toLowerCase() + "&city=bursa&country=TR" + "&api_key=658ace6e52628560305441pncd1f932",
            type: "GET",
            success: function(response){
                $.ajax({
                    url: "https://bayaapi.bsp-academy.com/HelpCenter/AddHelpCenter",
                    type: "POST",
                    contentType: "application/json",
                    data: JSON.stringify({
                        "name": $("#centername").val(),
                        "latitude": response[0].lat,
                        "longitude": response[0].lon,
                        "truth": null,
                        "categoryId": $("#category").val(),
                    }),
                    success: function(){
                        $("#loading").fadeOut();
                        $("#success").fadeIn();
                        setTimeout(function(){
                            $("#success").fadeOut();
                        }, 3000);
                    },
                    error: function(){
                        $("#error").fadeIn();
                        setTimeout(function(){
                            $("#error").fadeOut();
                        }, 3000);
                    },
                });
            },
            error: function(){
        
            }
        });
    }
});