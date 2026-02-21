var typed= new Typed(".text", {
    strings:["Frontend Developer", "Full Stack Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// Initialize EmailJS with your Public Key
// Get this from: EmailJS Dashboard > Account > API Keys
(function() {
    // Your Public Key from screenshot
    emailjs.init("DVrJxMCYMBuy3Ad3Q"); 
})();

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const btnText = submitBtn.querySelector('span');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // UI Feedback: Show the user something is happening
    btnText.innerText = 'Sending...';
    submitBtn.style.opacity = '0.7';
    submitBtn.disabled = true;

    // Service ID from your screenshot
    const serviceID = 'service_4j365a3';
    // REPLACE THIS with your actual Template ID from the Email Templates tab
    const templateID = 'template_44v5l1o'; 

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btnText.innerText = 'Message Sent!';
            alert('Success! Your message has been sent.');
            contactForm.reset();
        }, (err) => {
            btnText.innerText = 'Send Failed';
            alert('Failed to send: ' + JSON.stringify(err));
        })
        .finally(() => {
            // Reset button state after 3 seconds
            setTimeout(() => {
                btnText.innerText = 'Send Message';
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }, 3000);
        });
});