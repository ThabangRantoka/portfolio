const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


    emailjs.init("NEAuWdVyLiHRYek6G");

    document.getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        emailjs.send("service_cj2c2pb", "template_yvheqsv", {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        })
        .then(function() {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        })
        .catch(function(error) {
            alert("Failed to send message.");
            console.log(error);
        });

    });


menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

