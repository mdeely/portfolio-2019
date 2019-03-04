$( document ).ready(function() {

	$(function() {
	    $('body').removeClass('active');
	});

	//////////////////////
	// Gather elements //
	/////////////////////

	var $project_anchor = $(".project__item a");

	////////////////////
	// Bind to events //
	////////////////////
	$project_anchor.on('click', project_click );


	///////////////
	// Functions //
	///////////////

	function project_click(e) {
        e.stopImmediatePropagation();
		e.preventDefault();

	    var goTo = $(e.target).attr("href"); // store anchor href
		$(e.target).siblings(".project__visual").addClass("active");

	    // do something while timeOut ticks ... 

	    setTimeout(function(){
	         window.location = goTo;
	    }, 350);                             // time in ms

	}

});