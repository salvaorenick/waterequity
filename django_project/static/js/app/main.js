"use strict";function openLoanForm(){loanForm.removeClass("fix").css({height:"auto","background-image":"none"}),body.removeAttr("style"),footer.removeAttr("style"),openFormBtn.fadeOut(),$("html, body").animate({scrollTop:loanForm.offset().top},350)}function loanFormSuccess(){$("form").fadeOut(),$("#make-loan h2").first().fadeOut(),$("#make-loan img").first().fadeOut(),$(".thanks").css({display:"block",opacity:1}),$("#make-loan").css({"min-height":window.screen.height,"background-image":'url("http://waterequity.s3.amazonaws.com/media/filer_public/a3/b2/a3b29d3b-6059-4403-8ca1-9ba84f694cb7/ranjaana-and-her-new-waterpoint.jpg")',"background-position-y":0})}function animateLoanFormUp(){$("html, body").animate({scrollTop:$("#make-loan").offset().top},350)}if($(function(){var o=!0,n=0,a=0,t=5,e=$("nav.navbar"),i=e.outerHeight(),s=function(){o=!1,a=$(window).scrollTop(),Math.abs(n-a)>=t&&(a>n&&a>i?e.addClass("hide-nav"):e.removeClass("hide-nav"),n=a)};$(window).scroll(function(n){o=!0}),setInterval(function(){o&&s()},250)}),$(function(){var o=window.location.pathname;"/"!==o&&($("ul.navbar-nav li a").each(function(){var n=$(this).attr("href");n===o&&$(this).parent("li").addClass("active open")}),$("ul.navbar-nav li span").each(function(){var n=$(this).attr("href");n.substr(1,n.length-2)===o.split("/")[1]&&$(this).parent("li").addClass("active open")}))}),"/challenge/"===top.location.pathname&&$(window).on("load",function(){function o(){var o=parseInt($(window).scrollTop())+140,n=o-t;t<o&&o<i&&a.css({top:n}),o<t&&a.hasClass("inactive")&&(a.css({top:-20}).fadeIn(),a.removeClass("inactive")),o>i-40&&(a.fadeOut(),a.addClass("inactive"))}var n=$(".cup"),a=$(".drip"),t=n.offset().top,e=parseInt(n.height()),i=t+e-140;$(".drip").length&&$(window).scroll(function(){o()})}),$(function(){$("input.required").length&&$("input.required").after("<span>*</span>")}),$(".input-value").focus(function(){$(this).closest(".form-group").children("label").removeClass("active"),$("#radio-value").parent("label").addClass("active")}),$(".input-value").change(function(){$("#radio-value").val($(this).val())}),$("#make-loan").length){var loanForm=$("#make-loan"),loanFormHeightDisplayed=190,loanFormPrevDiv=$("#risks"),loanFormPrevDivDistanceFromTop=loanFormPrevDiv.offset().top,openFormBtn=$(".open-form"),body=$("body"),footer=$("footer.footer"),setLoanFormAtBottom=function(){loanForm.addClass("fix"),$(window).width()>1024?(footer.css({bottom:loanFormHeightDisplayed}),body.css({"padding-bottom":438+loanFormHeightDisplayed})):footer.css({"margin-bottom":loanFormHeightDisplayed})},loanFormOpened=!1;setLoanFormAtBottom(),openFormBtn.click(function(){openLoanForm(),animateLoanFormUp()}),loanForm.one("click",function(){openLoanForm(),animateLoanFormUp()}),$(window).scroll(function(){$(window).scrollTop()>=loanFormPrevDivDistanceFromTop-loanFormHeightDisplayed&&loanFormOpened===!1&&(openLoanForm(),loanFormOpened=!0)})}$(function(){var o,n,a;$(".play").click(function(t){t.preventDefault(),o=new Vimeo.Player($(this).closest(".row").find('iframe[id^="video"]')),n=$(this).closest(".row").find(".overlay"),a=$(this).closest(".row").find(".video-container"),a.fitVids(),n.css({left:0,top:0}),n.addClass("show"),o.play(),n.click(function(){n.removeClass("show"),setTimeout(function(){n.css({left:"-100%"})},300),o.unload()});try{ga("send",{hitType:"event",eventCategory:"Videos",eventAction:"play",eventLabel:o.element.src})}catch(o){}return!1})}),$(function(){$(".staff > div").hover(function(){$(this).siblings(".staff > div").addClass("bw")},function(){$(this).siblings(".staff > div").removeClass("bw")}),$(".modal").on("shown.bs.modal",function(){$(".modal-backdrop").appendTo(".daytonz-coolio")})});