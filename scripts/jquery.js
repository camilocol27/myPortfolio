$(document).ready(function(){


// small slider show

	$("#small-slider > div:gt(0)").hide();

	setInterval(function() { 
	  $('#small-slider > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#small-slider');
	},  3000);



$(" .menu a").click(function() {
			var href = $(this).attr("href");
			$.scrollTo(href , 800);
		})

		// $("#menu-icon").click(function() {

		// 	$("div").slideToggle(800);

		// });

// menu section

	$(" nav a").click(function() {
			var href = $(this).attr("href");
			$.scrollTo(href , 800);
		})

		$("#menu-icon").click(function() {

			$("nav").slideToggle(800);

		});

// arrow to scroll up 
	
	var offset = 800;
                var duration = 500;
                $(window).scroll(function() {
                    if ($(this).scrollTop() > offset) {
                        $('.icon-chevron-with-circle-up').fadeIn(duration);
                    } else {
                        $('.icon-chevron-with-circle-up').fadeOut(duration);
                    }
                });

                $('.icon-chevron-with-circle-up').click(function(event) {
                    event.preventDefault();
                    $('html, body').animate({scrollTop: 0}, duration);
                    return false;
                })

                $('.logo img').click(function(event) {
                    event.preventDefault();
                    $('html, body').animate({scrollTop: 0}, duration);
                    return false;
                });


       // navigation responsive

               var count = 1;

	$(".icon-menu").click(function(){
		console.log("here")

		if(count == 1){
			$("nav").animate({
				left: "0"
			});
			count= 0;
		}else{
			count= 1;
			$("nav").animate({
				left: "-100%"
			});
		}
	  });

// animation


$('#welcome').addClass('animated bounce');
$('#portfolio').addClass('animated zoomIn');

});

 
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}