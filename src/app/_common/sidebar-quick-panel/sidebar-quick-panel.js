$(function () {

    $('#quick-panel-btn').on('click', function(event){
		event.preventDefault();		
		$("#app").toggleClass("sidebar-quick-panel-open");
	});

	$("#sidebar-quick-panel-overlay").on('click', function() {
		$("#app").removeClass("sidebar-quick-panel-open");
	});

});