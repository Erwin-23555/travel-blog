const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields before submitting the form.');
            event.preventDefault();
        } else {
            alert('Thank you for contacting us!');
        }
    });
}
