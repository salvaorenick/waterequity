"use strict";function animateLoanFormUp(){$("html, body").animate({scrollTop:$("#make-loan").offset().top},150),$("nav.navbar").addClass("hide-nav")}function loanFormSuccess(){$("form").fadeOut(),$("#make-loan h2").first().fadeOut(),$(".thanks").css({display:"block",opacity:1}),$("#make-loan").css({"min-height":window.screen.height,"background-image":'url("http://waterequity.s3.amazonaws.com/media/filer_public/a3/b2/a3b29d3b-6059-4403-8ca1-9ba84f694cb7/ranjaana-and-her-new-waterpoint.jpg")',"background-position-y":0}),loanForm=null,animateLoanFormUp()}if($(function(){var a=!0,n=0,t=0,e=5,o=$("nav.navbar"),i=o.outerHeight(),s=function(){a=!1,t=$(window).scrollTop(),Math.abs(n-t)>=e&&(t>n&&t>i?o.addClass("hide-nav"):o.removeClass("hide-nav"),n=t)};$(window).scroll(function(n){a=!0}),setInterval(function(){a&&s()},250)}),$(function(){var a=window.location.pathname;"/"!==a&&($("ul.navbar-nav li a").each(function(){var n=$(this).attr("href");n===a&&$(this).parent("li").addClass("active open")}),$("ul.navbar-nav li span").each(function(){var n=$(this).attr("href");n.substr(1,n.length-2)===a.split("/")[1]&&$(this).parent("li").addClass("active open")}))}),"/challenge/"===top.location.pathname&&$(window).on("load",function(){function a(){var a=parseInt($(window).scrollTop())+140,n=a-e;e<a&&a<i&&t.css({top:n}),a<e&&t.hasClass("inactive")&&(t.css({top:-20}).fadeIn(),t.removeClass("inactive")),a>i-40&&(t.fadeOut(),t.addClass("inactive"))}var n=$(".cup"),t=$(".drip"),e=n.offset().top,o=parseInt(n.height()),i=e+o-140;$(".drip").length&&$(window).scroll(function(){a()})}),$(function(){$("input.required").length&&$("input.required").after("<span>*</span>")}),$(".input-value").focus(function(){$(this).closest(".form-group").children("label").removeClass("active"),$("#radio-value").parent("label").addClass("active")}),$(".input-value").change(function(){$("#radio-value").val($(this).val())}),$("#make-loan").length)var loanForm=$("#make-loan");$(function(){var a,n,t;$(".play").click(function(e){e.preventDefault(),a=new Vimeo.Player($(this).closest(".row").find('iframe[id^="video"]')),n=$(this).closest(".row").find(".overlay"),t=$(this).closest(".row").find(".video-container"),t.fitVids(),n.css({left:0,top:0}),n.addClass("show"),a.play(),n.click(function(){n.removeClass("show"),setTimeout(function(){n.css({left:"-100%"})},300),a.unload()});try{ga("send",{hitType:"event",eventCategory:"Videos",eventAction:"play",eventLabel:a.element.src})}catch(a){}return!1})}),$(function(){$(".staff > div").hover(function(){$(this).siblings(".staff > div").addClass("bw")},function(){$(this).siblings(".staff > div").removeClass("bw")}),$(".modal").on("shown.bs.modal",function(){$(".modal-backdrop").appendTo(".daytonz-coolio")})});