// /*-----------------------------------------------------------------------------------
// /*
// /* Init JS
// /*
// -----------------------------------------------------------------------------------*/

//  jQuery(document).ready(function($) {

// /*----------------------------------------------------*/
// /* FitText Settings
// ------------------------------------------------------ */

//     setTimeout(function() {
// 	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '40px' });
// 	 }, 100);


// /*----------------------------------------------------*/
// /* Smooth Scrolling
// ------------------------------------------------------ */

//    $('.smoothscroll').on('click',function (e) {
// 	    e.preventDefault();

// 	    var target = this.hash,
// 	    $target = $(target);

// 	    $('html, body').stop().animate({
// 	        'scrollTop': $target.offset().top
// 	    }, 800, 'swing', function () {
// 	        window.location.hash = target;
// 	    });
// 	});


// /*----------------------------------------------------*/
// /* Highlight the current section in the navigation bar
// ------------------------------------------------------*/

// 	var sections = $("section");
// 	var navigation_links = $("#nav-wrap a");

// 	sections.waypoint({

//       handler: function(event, direction) {

// 		   var active_section;

// 			active_section = $(this);
// 			if (direction === "up") active_section = active_section.prev();

// 			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

//          navigation_links.parent().removeClass("current");
// 			active_link.parent().addClass("current");

// 		},
// 		offset: '35%'

// 	});


// /*----------------------------------------------------*/
// /*	Make sure that #header-background-image height is
// /* equal to the browser height.
// ------------------------------------------------------ */

//    $('header').css({ 'height': $(window).height() });
//    $(window).on('resize', function() {

//         $('header').css({ 'height': $(window).height() });
//         $('body').css({ 'width': $(window).width() })
//    });


// /*----------------------------------------------------*/
// /*	Fade In/Out Primary Navigation
// ------------------------------------------------------*/

//    $(window).on('scroll', function() {

// 		var h = $('header').height();
// 		var y = $(window).scrollTop();
//       var nav = $('#nav-wrap');

// 	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
// 	      nav.fadeOut('fast');
// 	   }
//       else {
//          if (y < h*.20) {
//             nav.removeClass('opaque').fadeIn('fast');
//          }
//          else {
//             nav.addClass('opaque').fadeIn('fast');
//          }
//       }

// 	});


// /*----------------------------------------------------*/
// /*	Modal Popup
// ------------------------------------------------------*/

//     $('.item-wrap a').magnificPopup({

//        type:'inline',
//        fixedContentPos: false,
//        removalDelay: 200,
//        showCloseBtn: false,
//        mainClass: 'mfp-fade'

//     });

//     $(document).on('click', '.popup-modal-dismiss', function (e) {
//     		e.preventDefault();
//     		$.magnificPopup.close();
//     });


// /*----------------------------------------------------*/
// /*	Flexslider
// /*----------------------------------------------------*/
//    $('.flexslider').flexslider({
//       namespace: "flex-",
//       controlsContainer: ".flex-container",
//       animation: 'slide',
//       controlNav: true,
//       directionNav: false,
//       smoothHeight: true,
//       slideshowSpeed: 7000,
//       animationSpeed: 600,
//       randomize: false,
//    });

// });

(function($) {
   "use strict";

   // FitText Settings
   const fitTextSettings = {
       minFontSize: '40px',
       maxFontSize: '40px'
   };
   setTimeout(() => {
       $('h1.responsive-headline').fitText(1, fitTextSettings);
   }, 100);

   // Smooth Scrolling
   $('.smoothscroll').on('click', function(e) {
       e.preventDefault();
       const target = this.hash;
       const $target = $(target);
       $('html, body').stop().animate({
           scrollTop: $target.offset().top
       }, 800, 'swing', () => {
           window.location.hash = target;
       });
   });

   // Highlight the current section in the navigation bar
   const sections = $("section");
   const navigationLinks = $("#nav-wrap a");
   sections.waypoint({
       handler: function(event, direction) {
           let activeSection = $(this);
           if (direction === "up") {
               activeSection = activeSection.prev();
           }
           const activeLink = $('#nav-wrap a[href="#' + activeSection.attr("id") + '"]');
           navigationLinks.parent().removeClass("current");
           activeLink.parent().addClass("current");
       },
       offset: '35%'
   });

   // Make sure that #header-background-image height is equal to the browser height.
   const adjustHeaderHeight = () => {
       $('header').css({ 'height': $(window).height() });
       $('body').css({ 'width': $(window).width() });
   };
   adjustHeaderHeight();
   $(window).on('resize', () => {
       adjustHeaderHeight();
   });

   // Fade In/Out Primary Navigation
   $(window).on('scroll', () => {
       const headerHeight = $('header').height();
       const scrollTop = $(window).scrollTop();
       const nav = $('#nav-wrap');
       if ((scrollTop > headerHeight * .20) && (scrollTop < headerHeight) && ($(window).outerWidth() > 768)) {
           nav.removeClass('opaque');
       } else {
           if (scrollTop < headerHeight * .20) {
               nav.removeClass('opaque');
           } else {
               nav.addClass('opaque');
           }
       }
   });

   // Modal Popup
   $('.item-wrap a').magnificPopup({
       type: 'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'
   });
   $(document).on('click', '.popup-modal-dismiss', function(e) {
       e.preventDefault();
       $.magnificPopup.close();
   });
});
