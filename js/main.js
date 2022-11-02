
// Start typed //
const typed = new Typed('.typed', {

    strings: [

        '<i>Frontend developer </i>',
        '<i>Backend developer </i>',
        '<i>Programming mentor </i>'
    ],

    typeSpeed: 100,
    startDelay: 300,
    backSpeed: 75,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',

});

// emailjs
const notification = (text) =>
{
    Toastify({
        text: text,
        className: "info",
        gravity: "bottom", 
        position: "center",
        style: {
            background: "#0d1126",
            color: "#fff",
            fontFamily: 'Poppins',
            fontSize: "0.9em",
            border: "1px solid #64ffda",
            borderRadius:"4px"
        }
    }).showToast();
}

const btn = document.querySelector('#btn-send');
const form = document.querySelector('#form');
form.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Sending...';

const serviceID = 'default_service';
const templateID = 'template_9yqcvgt';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Send';
    notification('Message sent!');
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#comment').value = '';
    }, (err) => {
    btn.value = 'Send';
    notification('ups!');
    console.log("email js form error: " , JSON.stringify(err));
    });
});