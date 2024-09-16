/*-- show menu --*/
let navMenu = document.getElementById("navmenu"),
    openNav = document.getElementById("open-nav"),
    closeNav = document.getElementById('close-nav');


if (openNav) {
    openNav.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (closeNav) {
    closeNav.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/* root theme */
let toDarkmode = document.getElementById("toDmode"),
    toLightmode = document.getElementById("toLmode");

const root_theme = document.querySelector(":root");

if (toDarkmode) {
    toDarkmode.addEventListener('click', () => {
        toDarkmode.style.display = 'none';
        toLightmode.style.display = 'block';
        root_theme.style.setProperty("--background", "#212121");
        root_theme.style.setProperty("--text-color-dark", "#505050");
        root_theme.style.setProperty("--text-color-light", "#f3f3f3");
        root_theme.style.setProperty("--third-comp-green-trans-more", "#f3f3f310");
        root_theme.style.setProperty("--img-background", "#50505000");
        root_theme.style.setProperty("--shadow", "#151515");
        root_theme.style.setProperty("--shadow-scd", "#2d2d2d");
        root_theme.style.setProperty("--invertValue", "0");
    })
}

if (toLightmode) {
    toLightmode.addEventListener('click', () => {
        toDarkmode.style.display = 'block';
        toLightmode.style.display = 'none';
        root_theme.style.setProperty("--background", "#f3f3f3");
        root_theme.style.setProperty("--text-color-dark", "#f3f3f3");
        root_theme.style.setProperty("--text-color-light", "#505050");
        root_theme.style.setProperty("--third-comp-green-trans-more", "#58846e33");
        root_theme.style.setProperty("--img-background", "#505050");
        root_theme.style.setProperty("--shadow", "#00000010");
        root_theme.style.setProperty("--shadow-scd", "#00000022");
        root_theme.style.setProperty("--invertValue", "1");
    })
}

/** anchors in ease */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* email js */
const contactForm = document.getElementById('contactForm'),
    contactSuccessmsg = document.getElementById('contactSuccess'),
    contactFormContainer = document.getElementById('contactFormContainer');

const sendEmail = (e) => {
    e.preventDefault();
    if (!validation()) {
        return
    }
    emailjs.sendForm('service_ws6nqsw', 'template_6lxvmke', '#contactForm', 'WHLR-vKw2EID6qoZ4')
        .then(() => {
            contactFormContainer.style.display = 'none';
            contactSuccessmsg.style.display = 'flex';
            contactForm.reset();
            setTimeout(() => {
                contactFormContainer.style.display = 'flex';
                contactSuccessmsg.style.display = 'none';
            }, 5000)
        })
};
if (contactForm) {
    contactForm.addEventListener('submit', sendEmail);
}

function validation() {
    let email = document.forms['contactForm']['user_email'].value;
    let message = document.forms['contactForm']['message'].value;
    let msgError = document.getElementById('msgError');
    let msgErrorText = document.getElementById('msgErrorText');
    if (email == '') {
        msgError.style.display = 'flex';
        msgErrorText.textContent = 'email must be filled';
        setTimeout(() => {
            msgError.style.display = 'none';
            msgErrorText.textContent = '';
        }, 3000)
        return false;
    }
    else if (message == '') {
        msgErrorText.textContent = 'message must be filled';
        msgError.style.display = 'flex';
        setTimeout(() => {
            msgError.style.display = 'none';
            msgErrorText.textContent = '';
        }, 3000)
        return false;
    }
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!String(email).toLowerCase().match(re)) {
        msgErrorText.textContent = 'email is not valid';
        msgError.style.display = 'flex';
        setTimeout(() => {
            msgError.style.display = 'none';
            msgErrorText.textContent = '';
        }, 5000)
        return false;
    }


    return true
}