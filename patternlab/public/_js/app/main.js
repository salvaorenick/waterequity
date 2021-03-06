/* Contents:
    - eslint helpers
    - unfix and fix header on scroll
    - add active class to nav button matching page
    - cup drop on challenge page
    - add asterisk to required fields
    - make loan form helper
    - Vimeo overlay, autoplay and close with video stop
    - on staff hover, others go black and white with css class

*/

/*global Vimeo, event, ga */

'use strict';

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

    $(window).scroll(function(event){ // eslint-disable-line
        scrollTimeOut = true;
    });

    setInterval(function() {
        if (scrollTimeOut) {
            setNavClass();
            autoPopper();
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

// make loan form helper. toggle active class for radio and set its value with associated text input for the
$('.input-value').focus(function() {
    $(this).closest('.form-group').children('label').removeClass('active');
    $('#radio-value').parent('label').addClass('active');
});


$('.input-value').on('change', function(event){
    $('#radio-value').val(event.target.value).prop('checked', true);
});

function animateLoanFormUp() {
    $('html, body').animate({ scrollTop: 0 }, 250);
    setTimeout(
        function() {
            $('nav.navbar').addClass('hide-nav');
        }, 350
    );
}

function loanFormSuccess() { // eslint-disable-line
    $('form').fadeOut();
    $('.hero').fadeOut();
    $('#make-loan h2').first().fadeOut();
    $('.thanks').css({
        'display': 'block',
        'opacity': 1
    });
    $('#make-loan').css({
        'min-height': window.screen.height,
        'background-image': 'url("https://waterequity.s3.amazonaws.com/media/filer_public/a3/b2/a3b29d3b-6059-4403-8ca1-9ba84f694cb7/ranjaana-and-her-new-waterpoint.jpg")',
        'background-position-y': 0
    });
    loanForm = null; // eslint-disable-line
    animateLoanFormUp();
}

// make loan razzle dazzle. form sticks to the bottom of the page and pops up when a button is clicked
if ($('#make-loan').length) {
    var loanForm = $('#make-loan'); // eslint-disable-line
}


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
        try {
            ga('send', {
                hitType: 'event',
                eventCategory: 'Videos',
                eventAction: 'play',
                eventLabel: player.element.src
            });
        }
        catch (event){
            // console.log(event);
        }
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

// exit intent popup
// http://www.quirksmode.org/js/cookies.html
function createCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = '; expires=' + date.toGMTString();
    }

    document.cookie = name + '=' + value + expires + '; path=/';
}

function readCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}

var poppedThisSession = false;

var popNCookie = function(days) {
    $('#join').modal('show');
    createCookie('WaterEquity', 'joinMovementPopupDisplayed', days);
    poppedThisSession = true;
};

function autoPopper() {
    if (readCookie('WaterEquity') !== 'joinMovementPopupDisplayed') {
        document.addEventListener('mouseleave', function(e){
            if(e.clientY < 0 && poppedThisSession === false) {
                popNCookie(3);
            }
        }, false);

        if (window.pageYOffset > 1600 && poppedThisSession === false) {
            popNCookie(3);
        }
    }
}

$(function() {
    $('.join').on('click', function() {
        popNCookie(30);
    });
});

autoPopper();
