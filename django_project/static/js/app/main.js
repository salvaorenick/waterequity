"use strict";function animateLoanFormUp(){$("html, body").animate({scrollTop:0},250),setTimeout(function(){$("nav.navbar").addClass("hide-nav")},350)}function loanFormSuccess(){$("form").fadeOut(),$(".hero").fadeOut(),$("#make-loan h2").first().fadeOut(),$(".thanks").css({display:"block",opacity:1}),$("#make-loan").css({"min-height":window.screen.height,"background-image":'url("https://waterequity.s3.amazonaws.com/media/filer_public/a3/b2/a3b29d3b-6059-4403-8ca1-9ba84f694cb7/ranjaana-and-her-new-waterpoint.jpg")',"background-position-y":0}),loanForm=null,animateLoanFormUp()}function createCookie(n,a,e){var t="";if(e){var o=new Date;o.setTime(o.getTime()+24*e*60*60*1e3),t="; expires="+o.toGMTString()}document.cookie=n+"="+a+t+"; path=/"}function readCookie(n){for(var a=n+"=",e=document.cookie.split(";"),t=0;t<e.length;t++){for(var o=e[t];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(a))return o.substring(a.length,o.length)}return null}function showPopup(){"newsPopupShown"!==readCookie("WaterEquity")&&document.addEventListener("mouseleave",function(n){n.clientY<0&&($("#join").modal("show"),createCookie("WaterEquity","newsPopupShown",30))},!1)}if($(function(){var n=!0,a=0,e=0,t=5,o=$("nav.navbar"),i=o.outerHeight(),s=function(){n=!1,e=$(window).scrollTop(),Math.abs(a-e)>=t&&(e>a&&e>i?o.addClass("hide-nav"):o.removeClass("hide-nav"),a=e)};$(window).scroll(function(a){n=!0}),setInterval(function(){n&&s()},250)}),$(function(){var n=window.location.pathname;"/"!==n&&($("ul.navbar-nav li a").each(function(){var a=$(this).attr("href");a===n&&$(this).parent("li").addClass("active open")}),$("ul.navbar-nav li span").each(function(){var a=$(this).attr("href");a.substr(1,a.length-2)===n.split("/")[1]&&$(this).parent("li").addClass("active open")}))}),"/challenge/"===top.location.pathname&&$(window).on("load",function(){function n(){var n=parseInt($(window).scrollTop())+140,a=n-t;t<n&&n<i&&e.css({top:a}),n<t&&e.hasClass("inactive")&&(e.css({top:-20}).fadeIn(),e.removeClass("inactive")),n>i-40&&(e.fadeOut(),e.addClass("inactive"))}var a=$(".cup"),e=$(".drip"),t=a.offset().top,o=parseInt(a.height()),i=t+o-140;$(".drip").length&&$(window).scroll(function(){n()})}),$(function(){$("input.required").length&&$("input.required").after("<span>*</span>")}),$(".input-value").focus(function(){$(this).closest(".form-group").children("label").removeClass("active"),$("#radio-value").parent("label").addClass("active")}),$(".input-value").change(function(){$("#radio-value").val($(this).val())}),$("#make-loan").length)var loanForm=$("#make-loan");$(function(){var n,a,e;$(".play").click(function(t){t.preventDefault(),n=new Vimeo.Player($(this).closest(".row").find('iframe[id^="video"]')),a=$(this).closest(".row").find(".overlay"),e=$(this).closest(".row").find(".video-container"),e.fitVids(),a.css({left:0,top:0}),a.addClass("show"),n.play(),a.click(function(){a.removeClass("show"),setTimeout(function(){a.css({left:"-100%"})},300),n.unload()});try{ga("send",{hitType:"event",eventCategory:"Videos",eventAction:"play",eventLabel:n.element.src})}catch(n){}return!1})}),$(function(){$(".staff > div").hover(function(){$(this).siblings(".staff > div").addClass("bw")},function(){$(this).siblings(".staff > div").removeClass("bw")}),$(".modal").on("shown.bs.modal",function(){$(".modal-backdrop").appendTo(".daytonz-coolio")})}),showPopup();