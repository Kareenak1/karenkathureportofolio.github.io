let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id +']').classList.add('active');
            })
        }
    })
}



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
{
src="https://cdn.emailjs.com/dist/email.min.js">

    (function(){
        emailjs.init("service_hz5fb2j");
    })();
}
{
    document.getElementById('contact').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
    
      
        emailjs.sendForm('service_hz5fb2j', 'template_lvp0hd8', this)
            .then(function() {
                alert('Message sent successfully!'); 
            }, function(error) {
                alert('Failed to send the message. Please try again.');
            });
    
        this.reset();
    });
       
}