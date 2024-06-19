 const guestForm = document.getElementById('guestForm');
const guestList = document.getElementById('guestList');

guestForm.addEventListener('submit', function (e) {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const address = document.getElementById('address').value;
	const mobile = document.getElementById('mobile').value;
	const attend = document.getElementById('attend').value;

	console.log(value);

	guestForm.reset();
});
