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

$('#alyshiaPortrait').attr('src', 'img/portrait.jpeg');

// when mouse over my portrait, have a special surprise
$('#alyshiaPortrait').mouseover(function () {
	$(this).attr('src', 'img/portrait-hover.jpeg');
});

//change portrait picture back to normal
$('#alyshiaPortrait').mouseout(function () {
	$(this).attr('src', 'img/portrait.jpeg');
});

//add icons to experience list
const brands  = [
'img/brands/angularjs.png',
'img/brands/bitbucket-48x48-2284628.png',
'img/brands/css-48x48-2284638.png',
'img/brands/git-48x48-2284657.png',
'img/brands/jira-48x48-2284680.png',
'img/brands/jquery-48x48-2284682.png',
'img/brands/nodejs-48x48-2284703.png',
'img/brands/python-48x48-2284717.png',
'img/brands/react-48x48-2284721.png'
];
//loop to show each brand i have experience with
$.each( brands, function(index, brand) {
 $('#experienceList').append('<li><img src=' + brand + '></li>');
})
