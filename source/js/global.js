(function($){
	'use strict';

	//variables

	//start document ready
	$(document).ready(function()
	{	
		
		
		//loam more items for mobile
		$(".load-more").click(function(){		
			var parentDiv = $(this).parent().closest('div');
			$(this).hide();
			$(parentDiv).css("max-height","none");
		});
	
		
		
		// owl carousel options for m4 radio masthead find a station station nav
		var owl = $("#owl-demo");
 
		  owl.owlCarousel({
			  items : 9, // 9 items above 1024px browser width
			  itemsDesktop : [1024,4], // 4 items between 1024px and 768px
			  itemsDesktopSmall : [768,4], // 4 items betweem 768px and 780px
			  itemsTablet: [768,4], // 4 items between 768px and 320px
			  itemsMobile: [320,4], // 4 items between 320 and 0
			  navigation:true,
			  navigationText: [
				  "<i class='icon-chevron-left icon-white'><</i>",
				  "<i class='icon-chevron-right icon-white'>></i>"
				  ]
		  });
		 
		  
		  //m10 three panel image carousel
		  
		  	var m10 = $("#js-m10-carousel");
 
			  m10.owlCarousel({
				  items : 3, // 9 items above 1024px browser width
				  itemsDesktop : [1024,3], // 4 items between 1024px and 768px
				  itemsDesktopSmall : [768,3], // 4 items betweem 768px and 780px
				  itemsTablet: [768,1], // 4 items between 768px and 320px
				  itemsMobile: [320,1] // 4 items between 320 and 0
			  });
			 
			  // Custom Navigation Events
			  $(".next").click(function(){
				m10.trigger('owl.next');
			  });
			  $(".prev").click(function(){
				m10.trigger('owl.prev');
			  });
			  $(".play").click(function(){
				m10.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
			  });
			  $(".stop").click(function(){
				m10.trigger('owl.stop');
			  });
		  
		  
			//m20 station news feed carousel
		  
		  	var m20 = $("#js-m20-carousel");
 
			  m20.owlCarousel({
				  items : 3, // 9 items above 1024px browser width
				  itemsDesktop : [1024,3], // 4 items between 1024px and 768px
				  itemsDesktopSmall : [768,1], // 4 items betweem 768px and 780px
				  itemsTablet: [768,1], // 4 items between 768px and 320px
				  itemsMobile: [320,1], // 4 items between 320 and 0
				  autoPlay : 3000
			  });
			  
			  // Custom Navigation Events
			  $(".next").click(function(){
				m20.trigger('owl.next');
			  });
			  $(".prev").click(function(){
				m20.trigger('owl.prev');
			  });
			  $(".play").click(function(){
				m20.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
			  });
			  $(".stop").click(function(){
				m20.trigger('owl.stop');
			  });
			  
			  //m21 station promo carousel
		  
		  	var m21 = $("#js-m21-carousel");
 
			  m21.owlCarousel({
				  items : 1, // 9 items above 1024px browser width
				  itemsDesktop : [1024,3], // 4 items between 1024px and 768px
				  itemsDesktopSmall : [768,1], // 4 items betweem 768px and 780px
				  itemsTablet: [768,1], // 4 items between 768px and 320px
				  itemsMobile: [320,1], // 4 items between 320 and 0
				  navigation:true,
				  navigationText: [
					  "<i class='icon-chevron-left icon-white'><</i>",
					  "<i class='icon-chevron-right icon-white'>></i>"
				  ]
			  });
			  
			  // Custom Navigation Events
			  $(".next").click(function(){
				m21.trigger('owl.next');
			  });
			  $(".prev").click(function(){
				m21.trigger('owl.prev');
			  });
			  $(".play").click(function(){
				m21.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
			  });
			  $(".stop").click(function(){
				m21.trigger('owl.stop');
			  });
			 
		  
		  // toggle station selectors tabs on homepage
			$('.tabs .item').click(function(){
				var tab_id = $(this).attr('data-tab');

				$('.tabs .item').removeClass('current');
				$('.tab-content').removeClass('current');

				$(this).addClass('current');
				$("#"+tab_id).addClass('current');
			});
	
			// m23 - toggle two tabbed info block
			$('.info-tabs .tab-toggle').click(function(){
				var tab_id = $(this).attr('data-tab');

				$('.info-tabs .tab-toggle').removeClass('current');
				$('.info-tab-content').removeClass('current');
				
				$('.tab-toggle').removeClass('active-tab');
				$(this).closest('div').addClass('active-tab');

				$("#"+tab_id).addClass('current');
			});
			
			// toggle two tabbed info block RnaG Twitter and FB
			$('.info-tabs-rnag .tab-toggle-rnag').click(function(){
				var tab_id = $(this).attr('data-tab');

				$('.info-tabs-rnag .tab-toggle-rnag').removeClass('current');
				$('.info-tab-content-rnag').removeClass('current');
				
				$('.tab-toggle-rnag').removeClass('active-tab-rnag');
				$(this).closest('div').addClass('active-tab-rnag');

				$("#"+tab_id).addClass('current');
			});
			
			// m8 - toggle radio stations facebook panel tabs
			$('.info-tabs-fb .tab-toggle-fb').click(function(){
				var tab_id = $(this).attr('data-tab');

				$('.info-tabs-fb .tab-toggle-fb').removeClass('current');
				$('.info-tab-content-fb').removeClass('current');

				$('.info-tabs-fb .tab-toggle-fb').addClass('current');
				$("#"+tab_id).addClass('current');
				
				$('.tab-toggle-fb').removeClass('active-tab-fb');
				$(this).closest('div').addClass('active-tab-fb');
			});
			
			

				
			
			
			// toggle for m3 find a prog
			$('.more-menu-trigger--find-prog').click(function() {

				$('.nav-level-two.find-prog-nav').toggleClass("more-menu-visible");
				$(this).toggleClass("more-selected");
				return false;
			});
			
			// toggle for m3 find a prog sub menu accordion
			$('.find-prog-nav--sub-expand').click(function() {
				$(this).next("ul").toggleClass("section-visible");
				$(this).toggleClass("more-selected");
			});
			
			
			// toggle for m4 show hide find station 
			$('.more-menu-trigger--select-station').click(function(){
				$('.find-station-carousel').slideToggle('js-show-hide');
			});
			
			// toggle for m16 find a show
			$('.more-menu-trigger--find-show').click(function() {
				$('.nav-level-two.find-show-nav').toggleClass("more-menu-visible");
				$(this).toggleClass("more-selected");
				return false;
			});
			
			// toggle for m16 find a show sub menu accordion
			$('.find-show-nav--sub-expand').click(function() {
				$(this).next("ul").toggleClass("section-visible");
				$(this).toggleClass("more-selected");
			});
			
			//m13 toggle hide and show schedule
			$('#open-schedule').click(function(){
				$('#schedule-reveal').toggleClass('hide-elem');
				$(this).toggleClass("icon-Open_icon");
				$(this).addClass("icon-Less_icon");
			});
			
			
			//m4 and m16 toggle individual station menu on mobile
			$('.menu-trigger--individual-station').click(function(){
				$('.individual-station-nav').slideToggle('js-show-hide');
				//$('.rte-radio-player-img').slideToggle('js-show-hide');
			});
			
			//m26 toggle more option on prog page menu
			$('.more-menu-trigger--prog-nav').click(function(){
				$('.nav-level-two.prog-nav').toggleClass("more-menu-visible");
				$(this).toggleClass("more-selected");
				return false;
			});
			
			
			/*$('.menu-trigger--individual-station, .more-menu-trigger--select-station').click(function(){
				
			});*/
	
	});
	//end document ready

	//start windows load function
	$(window).load(function(){ 
		
	});	
	//end windows load function


	//set current doc width for screen resize function
	var currentDocumentWidth = 0;

	//call screen resize function
	screenResized();
	$(window).resize(function()
	{
		screenResized();
	});

	//start screen resize function
	function screenResized(){

		var newDocumentWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		
		if(newDocumentWidth != currentDocumentWidth)
		{
			//remove temporary element styles...
				
			//recall functions on screen resize		
		} 
		
		currentDocumentWidth = newDocumentWidth;
	}

})(jQuery);
	//end screen resize function
	//scroll to schedule used in m5 & m16
	function doScroll(){
		var offset = $("#open-schedule").offset().top;
		$('html,body').animate({scrollTop: offset },300);
		$('#schedule-reveal').removeClass('hide-elem');
		$("#open-schedule").removeClass("icon-Open_icon");
		$("#open-schedule").addClass("icon-Less_icon");
	}
