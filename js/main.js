
$(function(){
    
    $('.main-carousel').flickity({ 
        cellAlign: 'left', 
        contain: true
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 'fast');
    });

    

})
