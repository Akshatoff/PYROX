/* 
 Created on : Jul 4, 2017, 12:43:10 AM
 Author     : Atta-Ur-Rehman Shah (http://attacomsian.com)
 */
$(function () {
    //init 
    init();
    //init wow effects
    new WOW().init();

    //scroll menu
    $(window).scroll(function () {
        init();
    });

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //init function
    function init() {
        let con = document.querySelector(".console-img")
            let bounds;

            function rotateToMouse(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2,
        }
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

        con.style.transform = `
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 4}deg
    )`;
    }

        con.addEventListener('mouseenter', () => {
        bounds = con.getBoundingClientRect();
        document.addEventListener('mousemove', rotateToMouse);
    });

    con.addEventListener('mouseleave', () => {
        document.removeEventListener('mousemove', rotateToMouse);
        con.style.transform = '';
        con.style.background = '';
    });

        var secondFeature = $('#features').offset().top;
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $('.sticky-navigation').css({"background-color": 'black'});
        } else {
            $('.sticky-navigation').css({"background-color": 'transparent'});
        }
        if (scroll >= secondFeature - 200) {
            $(".mobileScreen").css({'background-position': 'center top'});
        }
        return false;
    }
});