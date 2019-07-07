$(function () {

	$('.chat-message-edit').on('change keyup keydown paste cut', 'textarea', function () {
		$(this).height(0).height(this.scrollHeight);
		
	}).find('textarea').change();
	

    $('#collapse-chat-btn').on('click', function(event){
			event.preventDefault();		
			$("#app").addClass("sidebar-chat-open");
	});

	$('#chat-header-open-btn').on('click', function(event){
		event.preventDefault();		
		$("#app").addClass("sidebar-chat-open");
	});

	$('#chat-header-close-btn').on('click', function(event){
		event.preventDefault();		
		$("#app").removeClass("sidebar-chat-open");
	});
	

	$('.chat-contact-item').on('click', function(event){
		event.preventDefault();	
		$("#app").addClass("sidebar-chat-open");
		$('.chat-contact-item').removeClass('active');
		$(this).addClass('active');
	});

	function expandTextarea(id) {
		document.getElementById(id).addEventListener('keyup', function() {
			this.style.overflow = 'hidden';
			this.style.height = 0;
			this.style.height = this.scrollHeight + 'px';
		}, false);
	}
	
});