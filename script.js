let firstName = prompt('What is your name?');
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

let lastName = prompt('What is your last name?');
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

let favCarBrand = prompt('What is your favourite car brand?');
favCarBrand = favCarBrand.toUpperCase();

let review = {
    firstName,
    lastName,
    favCarBrand
}

let html = `

<div>
    <p class = "header">My review:</p>
    <p>My full name is 
        <span>${review.firstName} ${review.lastName}</span>
    </p>
    <p>and my favourite car brand is 
        <span>${review.favCarBrand}</span>
    .
    </p>
</div>

`

document.body.innerHTML = html;