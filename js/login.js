$(function(){
	$('.floor img').animate({
		left: '10%'
	},2000,'easeOutBounce');
	$('.people .tools').delay(1500).animate({
		opacity:'1',
        width:"400px",
	},1000,'easeOutExpo');
	$('.people .ren').delay(1000).fadeIn(1000);
	
	
})