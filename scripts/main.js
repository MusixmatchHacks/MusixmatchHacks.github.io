(function() {

	var hack_card_template = Handlebars.compile($('#template-hackcard').html());
	$('#hack_collection').append(hack_card_template(hack_data));

})();