$(document).ready(function() {
	
	$('form').on('submit', function(e) {
		e.preventDefault();
		var new_item = $('.type').val()
		$('.ul_current').append('<li><button class="x_box">X</button>' + new_item + '</li>');
		$('.type').val('');
		attachRemove();
	});

	$('.ul_current').on('click', function(e) {
		$(e.target).toggleClass('line-through');
	});

	// if you adding a new button it doesn't hear the same instructions as all the other buttons did when the page loaded
	// to do something twice, save it as a variable
	var attachRemove = function() {
	$('.x_box').on('click', function(e) {
        $(e.target).parent().remove();
   });
	}
	
	$('.reset-button').on('click', function(e) {
		e.preventDefault();
		$('ul').empty();
	});

});

// 1. user clicks submit
// 2. browser looks at the form element to see where the info is getting sent to
// 2.5 jquery will stop the form from being sent in order to do some stuff to the data.
// 3. browser gathers up all inputs data inside of form and sends it to the url in the 'action'

