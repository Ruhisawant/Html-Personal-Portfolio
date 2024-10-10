// Handle navbar scroll
document.addEventListener('DOMContentLoaded', () => {
    const navbarLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');
    const headerEl = document.querySelector('.header');

    function handleScroll() {
        let index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navbarLinks.forEach((link) => link.classList.remove('active'));
        if (navbarLinks[index]) {
            navbarLinks[index].classList.add('active');
        }
        if (window.scrollY > 50) {
            headerEl.classList.add('header-scrolled');
        } else {
            headerEl.classList.remove('header-scrolled');
        }
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });
});


//Handle menu
var sideMenu = document.querySelector("nav");

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}


// Handle text animation
const app = document.getElementById('app');

function setStaticText() {
    app.innerHTML = `
        <div class="line">Hello There!</div>
        <div class="line">My Name is <span class="highlight">Ruhi Sawant</span></div>
        <div class="line">Welcome to My Website!</div>
    `;
}
function applyTypewriterEffect() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 800) {
        setStaticText();
    } else {
        app.innerHTML = '';

        const typewriter = new Typewriter(app, {
            loop: true,
            delay: 80,
        });
        typewriter
            .pauseFor(1000)
            .typeString('Hello There! <br>')
            .pauseFor(1000)
            .typeString('My Name is Ruhi Sawant<br>')
            .pauseFor(1000)
            .typeString('Welcome to My Website!')
            .pauseFor(1200)
            .start();
    }
}
applyTypewriterEffect();

window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 800) {
        setStaticText();
    } else {
        applyTypewriterEffect();
    }
});


// Handle slider
const swiper = new Swiper('.slide-content', {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 1,
    direction: 'horizontal',
    loop: true,
    centerSlide: true,
    grabCursor: true,

    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Breakpoints for responsive design
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});


// Handle contact form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbywuFPN4lhpMHqjvAHTNTxO3rS6AuWbsTxNFtJ4gtekSMp_a-_-DoSxurq2RTq2NmiY/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    msg.innerHTML = "Sending...";
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                msg.innerHTML = "Message sent successfully!";
                form.reset();
            } else {
                throw new Error("Error sending message");
            }
        })
        .catch(error => {
            msg.innerHTML = "Error sending message. Please try again.";
            console.error('Error!', error.message);
        })
        .finally(() => {
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
        });
});