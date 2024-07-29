// Handle navbar scroll
document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navbarLinks.forEach((link) => link.classList.remove('active'));
        if (navbarLinks[index]) {
            navbarLinks[index].classList.add('active');
        }
    }

    // Set initial active link
    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
    
    // Handle active link styling
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });

    updateHeader();
});

const headerEl = document.querySelector('.header');

function updateHeader() {
    if (window.scrollY > 50) {
        headerEl.classList.add('header-scrolled');
    } else {
        headerEl.classList.remove('header-scrolled');
    }
}

window.addEventListener('scroll', updateHeader);

// Handle tab links
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (const tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Handle contact form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbywuFPN4lhpMHqjvAHTNTxO3rS6AuWbsTxNFtJ4gtekSMp_a-_-DoSxurq2RTq2NmiY/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                msg.innerHTML = "Message sent successfully";
                setTimeout(() => {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            } else {
                msg.innerHTML = "Error sending message";
            }
        })
        .catch(error => {
            msg.innerHTML = "Error sending message";
            console.error('Error!', error.message);
        });
});

// Handle text animation
var app = document.getElementById('app')

var Typewriter = new Typewriter(app, {
    loop: true,
    delay: 80,
});

Typewriter
    .pauseFor(1000)
    .typeString('Hello There! <br>')
    .pauseFor(1000)
    .typeString('My Name is Ruhi Sawant<br>')
    .pauseFor(1000)
    .typeString('Welcome to My Website!')
    .pauseFor(1200)
    .start()