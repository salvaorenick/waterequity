'use strict';

/*jshint unused:false */
/*global Vimeo, e */

// unfix and fix header on scroll
$(function() {
    var scrollTimeOut = true,
        lastYPos = 0,
        YPos = 0,
        YPosDelta = 5,
        nav = $('nav.navbar'),
        navHeight = nav.outerHeight(),
        setNavClass = function() {
            scrollTimeOut = false;
            YPos = $(window).scrollTop();

            if(Math.abs(lastYPos - YPos) >= YPosDelta) {
                if (YPos > lastYPos && YPos > navHeight){
                    nav.addClass('hide-nav');
                } else {
                    nav.removeClass('hide-nav');
                }
                lastYPos = YPos;
            }

        };

    $(window).scroll(function(e){
        scrollTimeOut = true;
    });

    setInterval(function() {
        if (scrollTimeOut) {
            setNavClass();
        }

    }, 250);

});

// add active class to nav button matching page
$(function() {
    var url = window.location.pathname;
    if (url !== '/') {
        $('ul.navbar-nav li a').each(function() {
            var active = $(this).attr('href');
            if (active === url) {
                $(this).parent('li').addClass('active open');
            }
        });
        $('ul.navbar-nav li span').each(function() {
            var active = $(this).attr('href');
            if (active.substr(1, active.length - 2) === url.split('/')[1]) {
                $(this).parent('li').addClass('active open');
            }
        });
    }
});

// cup drop on challenge page
if (top.location.pathname === '/challenge/') {
    $(window).on ('load', function() {
        var cup = $('.cup'),
            drip = $('.drip'),
            topOfCup = cup.offset().top,
            cupSize = parseInt(cup.height()),
            bottomOfCup = topOfCup + cupSize - 140;

        function waterDrop() {
            var topOfViewPort = parseInt($(window).scrollTop()) + 140,
                dropTop = topOfViewPort - topOfCup;
            if ( topOfCup < topOfViewPort && topOfViewPort < bottomOfCup) {
                drip.css({top: dropTop});
            }

            if (topOfViewPort < topOfCup && drip.hasClass('inactive')) {
                drip.css({top: -20}).fadeIn();
                drip.removeClass('inactive');
            }

            if (topOfViewPort > (bottomOfCup - 40)) {
                drip.fadeOut();
                drip.addClass('inactive');
            }
        }
        if ( $('.drip').length ) {
            $(window).scroll(function () {
                waterDrop();
            });
        }
    });
}

// add asterisk to required fields
$(function() {
    if ( $('input.required').length ) {
        $('input.required').after('<span>*</span>');
    }
});

// Vimeo overlay, autoplay and close with video stop
$(function() {
    var player, overlay, container;
    $('.play').click(function(event) {
        event.preventDefault();
        player = new Vimeo.Player($(this).closest('.row').find('iframe[id^="video"]'));
        overlay = $(this).closest('.row').find('.overlay');
        container = $(this).closest('.row').find('.video-container');
        container.fitVids();
        overlay.css({
            'left': 0,
            'top': 0
        });
        overlay.addClass('show');
        player.play();

        overlay.click(function() {
            overlay.removeClass('show');
            setTimeout(function() {
                overlay.css({
                    'left': '-100%'
                });
            }, 300);

            player.unload();
        });
        return false;
    });
});

// on staff hover, others go black and white with css class
$(function() {
    $('.staff > div').hover(function() {
        $(this).siblings('.staff > div').addClass('bw');
    }, function() {
        $(this).siblings('.staff > div').removeClass('bw');
    });

    $('.modal').on('shown.bs.modal', function() {
        $('.modal-backdrop').appendTo('.daytonz-coolio');
    });
});
