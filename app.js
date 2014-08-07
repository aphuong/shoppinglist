$(document).ready(function() {
	
	$('form').on('submit', function(e) {
		e.preventDefault();
		var new_item = $('.type').val()
		var list_item = "<li>" + new_item + "</li>";
		$('.ul_current').append(list_item);
	});

	$('.ul_current').on('click', function(e) {
		$(e.target).toggleClass('line-through');
	});

	$('.ul_current').on('dblclick', function(e) {
		$(e.target).remove();
	});

	$

});

// 1. user clicks submit
// 2. browser looks at the form element to see where the info is getting sent to
// 2.5 jquery will stop the form from being sent in order to do some stuff to the data.
// 3. browser gathers up all inputs data inside of form and sends it to the url in the 'action'

// the 'action' for creating a highline product is like 'www.highline.org/admin/products/create'

