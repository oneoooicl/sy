jQuery(document).ready(function($) {
	var sangar = $('#sangar-example').sangarSlider({
        showAllSlide : true, // show all previous and next slides
        timer :  true, // true or false to have the timer
        width : 1100, // slideshow width
		height : 600 // slideshow height
	});

	

    $(".dwb-shop-show .shop_nr_right").on("click",function(){
    	$(this).parents('.shop_nr1').next().slideToggle("slow");

    })

    

})