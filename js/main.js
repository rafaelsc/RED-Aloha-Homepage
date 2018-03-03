"use strict";

$(function(){
    
    $(".main-carousel").flickity({ 
        cellAlign: "left",
        contain: true,
        percentPosition: false,
        autoPlay: false,
        prevNextButtons: true

    });

    $(document).on("click", "a[href^='#']", function (event) {
        event.preventDefault();
    
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, "fast");
    });

    $(".subscribeForm").on("submit", "form", function(t) {
        t.preventDefault();

        var eMail = $("#emailInput");

        if(validateEmail(eMail.val())){
            alert("Thanks for subscribing!");
            eMail.val("");
        } else{
            alert("Please submit a valid email address.");
        }
     });

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    var itensInChat = 0;
    $(document).on("click", ".addToCard", function (event) {
        event.preventDefault();
    
        $(".shoppingCardItens")
            .text(++itensInChat)
            .show().css("display", "flex");

    });

});