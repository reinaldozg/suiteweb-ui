//LoginForm validation
$(function() {

	if (!$('#login-form').length) {
        return false;
    }

    var loginValidationSettings = {
	    rules: {
	        username: {
	            required: true,
	            required: true
	        },
	        password: "required",
	        agree: "required"
	    },
	    messages: {
	        username: {
	            required: "Please enter username",
	            required: "Please enter a valid email address"
	        },
	        password:  "Please enter password",
	        agree: "Please accept our policy"
	    },
	    // invalidHandler: function() {
		// 	animate({
		// 		name: 'shake',
		// 		selector: '.auth-container'
		// 	});
		// }
	}

	$.extend(loginValidationSettings, config.validations);

	$('#login-form').validate(loginValidationSettings);
	

	// new PerfectScrollbar('.auth-container', {

	// 	// A list of handlers to scroll the element.
	
	// 	handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'], 
	
	// 	// The scroll speed applied to mousewheel event.
		
	// 	wheelSpeed: 1, 
	
	// 	// If true, when the scroll reaches the end of the side,
	
	// 	// mousewheel event will be propagated to parent element.
	
	// 	wheelPropagation: false, 
	
	// 	// When set to an integer value, the thumb part of the scrollbar
	
	// 	// will not shrink below that number of pixels.
	
	// 	minScrollbarLength: null, 
	
	// 	// When set to an integer value, the thumb part of the scrollbar
	
	// 	// will not expand over that number of pixels.
	
	// 	maxScrollbarLength: null, 
	
	// 	// When set to true, and only one (vertical or horizontal) scrollbar
	
	// 	// is visible then both vertical and horizontal scrolling will affect the scrollbar.
	
	// 	useBothWheelAxes: false, 
	// 	// When set to true, the scroll bar in X axis will not be available,
	
	// 	// regardless of the content width.
	
	// 	suppressScrollX: false, 
	
	// 	// When set to true, the scroll bar in Y axis will not be available,
	
	// 	// regardless of the content height.
	
	// 	suppressScrollY: false, 
	
	// 	// true: swipe scrolling will be eased
	
	// 	swipeEasing: true, 
	
	// 	// The number of pixels the content width can surpass the
	
	// 	// container width without enabling the X axis scroll bar.
	
	// 	scrollXMarginOffset: 0, 
	
	// 	// The number of pixels the content height can surpass the
	
	// 	// container height without enabling the Y axis scroll bar.
	
	// 	scrollYMarginOffset: 0,
	// });


})