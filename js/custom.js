//Here is the logic for auto dropdown on hover and scroll to top button
//Blame Anuj Sharma if something is not working


$(document).ready(function() {

        checkSize(); //Check  width of browser window, needed from enabling auto dropdown on widescreen devices

        // Slide in cards on scroll
        $(window).scroll(function() {
          $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
              if (pos < winTop + 600) {
                $(this).addClass("slide");
              }
          });
        });

        //Show or hide scroll to top button on the basis of current position
        $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });

            // scroll body to 0px on click
            $('#back-to-top').click(function () {
                $('#back-to-top').tooltip('hide');
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
            
            $('#back-to-top').tooltip('show');
    });

    //Check the screen width and enable auto dropdown if needed
    function checkSize(){
    	var width = $(window).width();

        if (width > 768) {
        $(function(){
    	$(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });
    }
    }

    // Configuration for Placement Image Companies Slider
     $(document).ready(function(){
      $('.slick-slider').slick({
          dots: false,
          infinite: true,
          speed: 900,
          slidesToShow: 1,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 500,
          variableWidth: true,
          arrows: false
      });
    });