$(document).ready(function() {

	var attachRemove = function() {
	  $('.x_box').on('click', function(e) {
      $(e.target).parent().remove();
    });
	}

	attachRemove();

	$('form').on('submit', function(e) {
		e.preventDefault();
		var new_item = $('.type').val()
		
		//if the input is an empty string, don't do anything
		if (new_item == '') {
		}
		//else if input is an empty space, don't do anything 
		
		//else append the item to the list
		else {
			$('.ul_current').append('<li><button class="x_box">X</button>' + new_item + '</li>');
			$('.type').val('');
			attachRemove();
		}
	});

	$('.ul_current').on('click', function(e) {
		$(e.target).toggleClass('line-through');
	});
	
	$('.reset-button').on('click', function(e) {
		e.preventDefault();
		$('ul').empty();
	});

});

