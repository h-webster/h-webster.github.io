const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm('service_u24hcdg', 'template_3fu0r2e', this)
    .then(() => {
        console.log('SUCCESS!');
    }, (error) => {
        console.log('FAILED...', error);
    });
});