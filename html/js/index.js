const logo = document.getElementById('site-logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        logo.classList.add('hidden');
    } else {
        logo.classList.remove('hidden');
    }
});

// jQuery hover animation
$(document).ready(function () {
    $(".clickable").hover(
        function () {
            $(this)
            .css("transition", "transform 0.18s ease, box-shadow 0.18s ease")
            .css("transform", "scale(1.05)")
            .css("box-shadow", "0 6px 18px rgba(0,0,0,0.45)");
         },
        function () {
            $(this)
            .css("transform", "scale(1)")
            .css("box-shadow", "0 2.113px 2.113px rgba(0,0,0,0.25)");
        }
    );
});

// jQuery hamburger menu
$(document).ready(function () {
    $("#hamburger").on("click", function () {
        $(this).toggleClass("open");
        $("#nav-links").slideToggle(300);
    });
    
    $("#nav-links a").on("click", function () {
        $("#nav-links").slideUp(300);
        $("#hamburger").removeClass("open");
    });

    $(window).on("resize", function () {
        if ($(window).width() > 768) {
            $("#nav-links").show();
            $("#hamburger").removeClass("open");
        } else {
            if (!$("#hamburger").hasClass("open")) {
                $("#nav-links").hide();
            }
        }
    });
});