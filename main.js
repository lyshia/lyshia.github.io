const msgText = document.getElementById('message').innerText;

$('#submitButton').click(function () {
	$.post(
		'https://submit-form.com/4l4mtNaX"',
		{
			message: msgText,
		},
		null,
		'json' // dataType must be set to json
	).then(function (response) {
		console.log(response);
	});
	// .catch(function (response) {
	// 	console.error(response);
	// });
});

// when mouse over my portrait, have a special surprise
$('#alyshiaPortrait').mouseover(function () {
	$(this).attr('src', 'img/portrait-hover.jpeg');
});

//change portrait picture back to normal
$('#alyshiaPortrait').mouseout(function () {
	$(this).attr('src', 'img/portrait.jpeg');
});
