jQuery(document).ready(function(){
	"use strict";
	$('#slider-carousel').carouFredSel({
		responive: true, //for multi-browser support
		width: '100%', 
		circular:true, //circular navigation
		scroll:{ //scroll properties are defined
			items:1, //1 item is displayed at a time
			duration:500, //duration of visibility in ms
			pauseOnHover:true //slider pauses on hovering mouse			
		},
		auto:true, //auto sliding
		items:{ //properties of items in slider
			visible:{ //min 1 item and max 1 item is visible at a time
				min:1,
				max:1				
			},
			height:"variable"			
		},
		pagination:{
			container:".sliderpager",
			pageAnchorBuilder:false
		}
	});
	
	$(window).scroll(function(){
		var top=$(window).scrollTop();
		if(top>=60){
			$("header").addClass('secondary');
		}
		else
			if ($("header").hasClass('secondary')){
				$("header").removeClass('secondary');
			}
	});
});