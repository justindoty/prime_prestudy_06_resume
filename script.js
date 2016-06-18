$(document).ready(function() {
	$('button').on('mouseenter', function (){
    $(this).animate({height: "430px", width: "430px",fontSize: "3.2em"});
});
	$('button').on('mouseleave', function (){
    $(this).animate({height: "400px", width: "400px",fontSize: "3em"});
});
	$('button').on('click', function(){
	$('.hidden').removeClass('hidden');
	$('button').remove();
});
});


