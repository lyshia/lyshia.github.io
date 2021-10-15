const msgText = document.getElementById('message').innerText;

      document
				.getElementById('submitButton')
				.addEventListener('click', function () {
					axios
						.post('https://submit-form.com/4l4mtNaX', {
							message: 'Hello, World',
							'g-recaptcha-response': grecaptcha.getResponse(),
						})
						.then(function (response) {
							console.log(response);
						})
						.catch(function (response) {
							console.error(response);
						});
				});




// $('#submitButton').click(function () {
// 	$.post(
// 		'https://submit-form.com/4l4mtNaX',
// 		{
// 			message: msgText,
// 		},
// 		null,
// 		'json' // dataType must be set to json
// 	).then(function (response) {
// 		console.log(response);
// 	});
// 	// .catch(function (response) {
// 	// 	console.error(response);
// 	// });
// });

//remove inability to submit until after click recaptcha


function callback() {
	const submitButton = document.getElementById('submit-button');
	submitButton.removeAttribute('disabled');
}

// load "hello" file and then print out random hello
// API didn't do what I liked, so I parsed how to say "hello" in different languages from https://fourtonfish.com/project/hellosalut-api/

const hello = () =>  {$.getJSON('hello.json', function (response) {
	//get length of the array
	let randomIndex = Math.floor(Math.random() * response.hello.length);
	// can't read HTML code, so have to parse the selection to HTML
	let helloToHTML = $.parseHTML(response.hello[randomIndex]);
	//print out the selected word in HTML
	$('#helloWorld').text(' ' + helloToHTML[0].textContent + '');
})};
//call hello function on load
hello();
//call function again on interval 
setInterval(function () {
	hello()
}, 5000);

//set profile picture
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
const logos = [
	'img/brands/angularjs.png',
	'img/brands/bitbucket-48x48-2284628.png',
	'img/brands/css-48x48-2284638.png',
	'img/brands/git-48x48-2284657.png',
	'img/brands/jira-48x48-2284680.png',
	'img/brands/jquery-48x48-2284682.png',
	'img/brands/nodejs-48x48-2284703.png',
	'img/brands/python-48x48-2284717.png',
	'img/brands/react-48x48-2284721.png',
];
//loop to show each brand i have experience with
$.each(logos, function (index, logo) {
	$('#experienceList').append('<li><img src=' + logo + '></li>');
});

//object that has my social media icons and urls
const $socials = [
	{
		name: 'linkedin',
		image: 'img/brands/linkedin-48x48-2284689.png',
		url: 'https://www.linkedin.com/in/alyshiabentley/',
	},
	{
		name: 'github',
		image: 'img/brands/github-48x48-2284658.png',
		url: 'https://github.com/lyshia',
	},
	{
		name: 'twitter',
		image: 'img/brands/twitter-48x48-2284759.png',
		url: 'https://twitter.com/BentleyAlyshia',
	},
];


// print out each icon with link
$socials.forEach((social) => {
	$('#socialsList').append(
		'<li><a href=' +
			social.url +
			' target ="_blank"><img src=' +
			social.image +
			'></a></li>'
	);
});
