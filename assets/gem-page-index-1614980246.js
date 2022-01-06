

    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1632731534204').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var autoplay = $module.data('autoplay'), 
          loop = $module.data('loop');
    } else {
      var autoplay = 0, 
          loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
              items:colxs,
              nav: navxs,
              dots:dotsxs,
              margin: marginxs
          },
          768:{
              items:colsm,
              nav: navsm,
              dots:dotssm,
              margin: marginsm
          },
          992:{
              items:colmd,
              nav: navmd,
              dots:dotsmd,
              margin: marginmd
          },
          1200:{
              items:collg,
              nav: navlg,
              dots:dotslg,
              margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
        setTimeout(function() {	
            initCarousel();	
        }, 300)	
    } else {	
        initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1631509239210').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808723').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808723-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808723-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808723-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808742').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808742-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808742-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808742-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808782').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808782-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808782-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808782-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808702').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808702-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808702-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808702-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808685').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808685-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808685-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808685-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1632949223462').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1632949223462-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1632949223462-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1632949223462-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1632949224339').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1632949224339-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1632949224339-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1632949224339-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1632949225076').children('.module');
            $module.gfV3Product();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1632949225076-0').children('.module');
            var effect = $module.attr('data-effect');
            $module.gfV3ProductImage({
                'effect': effect
            })
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1632949225076-1').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1632949225076-2').children('.module');
            $module.gfV3ProductPrice();
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808727').children('.module');   
            var navspeed = $module.data('navspeed'),
                autoplaytimeout = $module.data('autoplaytimeout'),
                autoplayhoverpause = $module.data('autoplayhoverpause'),
                navlg = $module.data('navlg'),
                navmd = $module.data('navmd'),
                navsm = $module.data('navsm'),
                navxs = $module.data('navxs'),
                collg = $module.data('collg'),
                colmd = $module.data('colmd'),
                colsm = $module.data('colsm'),
                colxs = $module.data('colxs'),
                dotslg = $module.data('dotslg'),
                dotsmd = $module.data('dotsmd'),
                dotssm = $module.data('dotssm'),
                dotsxs = $module.data('dotsxs'),
                marginlg = parseInt($module.data('marginlg')),
                marginmd = parseInt($module.data('marginmd')),
                marginsm = parseInt($module.data('marginsm')),
                marginxs = parseInt($module.data('marginxs'));

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'production') {
                var autoplay = $module.data('autoplay'), 
                    loop = $module.data('loop');
            } else {
                var autoplay = 0, 
                    loop = 0;
            }
        
            $module.owlCarousel({
                mouseDrag: false,
                autoplayHoverPause: autoplayhoverpause,
                autoplay: autoplay,
                autoplayTimeout: autoplaytimeout,
                loop: loop,
                navSpeed: navspeed,
                autoWidth: !1,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:colxs,
                        nav: navxs,
                        dots:dotsxs,
                        margin: marginxs
                    },
                    768:{
                        items:colsm,
                        nav: navsm,
                        dots:dotssm,
                        margin: marginsm
                    },
                    992:{
                        items:colmd,
                        nav: navmd,
                        dots:dotsmd,
                        margin: marginmd
                    },
                    1200:{
                        items:collg,
                        nav: navlg,
                        dots:dotslg,
                        margin: marginlg
                    }
                }
            }); 
        }); 
    
    
(function( jQuery ){
  var $module = jQuery('#m-1614982329846');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  $module.css({
    'height': 'auto'
  });
  jQuery(window).resize(function(){
    $module.css('height', 'auto');
  });
  $module.children('.module').removeClass('full-height');

  var image = $module.children('.module').data('image') || '';
  if ($module.children('.module').data('speed') || $module.children('.module').data('speed') == 0) {
    var speed = parseFloat($module.children('.module').data('speed'));
  } else {
    var speed = 0.2;
  }
  if($module.data('gfv3parallax') != undefined) {
    $module.removeData('gfv3parallax');
  }
  $module.gfV3Parallax({
    'image': image,
    'speed': speed,
    'mode': mode
  });
  if(mode == 'dev') {
    var moduleId = "1614982329846";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1614982329846") {
      window.getParallax1614982329846 = function() {
        return $module.data('gfv3parallax');
      }
    }
  }
})( window.GemQuery || jQuery );
    
        jQuery(function() {
            var $module = jQuery('#m-1570092808767').children('.module');
            $module.gfV1Mailchimp();
        });
    
(function( jQuery ){
  var $module = jQuery('#m-1631070919238').children('.module');
  $module.gfV1Popup();

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'dev') {
    var moduleId = "1631070919238";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1631070919238") {
      window.getPopup1631070919238 = function() {
        return $module.data('gfv1popup');
      }
    }
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1631073767250');
  $module.gfV4Parallax();
})( window.GemQuery || jQuery );
    
    (function( jQuery ){
  // var $module = jQuery('#m-1631073196867').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    