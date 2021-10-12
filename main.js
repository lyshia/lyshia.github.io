
// when mouse over my portrait, have a special surprise 
$('#alyshiaPortrait').mouseover(function () {
	$(this).attr('src', 'img/portrait-hover.jpeg');
});

//change portrait picture back to normal 
$('#alyshiaPortrait').mouseout(function () {
	$(this).attr('src', 'img/portrait.jpeg');
});
