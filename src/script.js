 const guestForm = document.getElementById('guestForm');
const guestList = document.getElementById('guestList');

guestForm.addEventListener('submit', function (e) {
	e.preventDefault();

	const name = document.getElementById('name').value;
	const address = document.getElementById('address').value;
	const mobile = document.getElementById('mobile').value;
	const attend = document.getElementById('attend').value;

	const guestCard = document.createElement('div');
	guestCard.classList.add('guest-card');
	guestCard.innerHTML = `
				<h2>${name}</h2>
				<p><strong>Address:</strong> ${address}</p>
				<p><strong>Mobile:</strong> ${mobile}</p>
				<p><strong>Attending/Attended:</strong> ${attend}</p>`;

	guestList.appendChild(guestCard);
	console.log(guestCard);
	guestForm.reset();
});
