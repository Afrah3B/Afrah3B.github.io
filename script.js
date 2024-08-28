/*-- show menu --*/
let navMenu = document.getElementById("navmenu"),
    openNav = document.getElementById("opennav"),
    closeNav = document.getElementById('closenav'),
    toDarkmode = document.getElementById("toDmode"),
    toLightmode = document.getElementById("toLmode");
const root_theme = document.querySelector(":root");

console.log('opennav clicked');
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
if (toDarkmode) {
    toDarkmode.addEventListener('click', () => {
        toDarkmode.style.display = 'none';
        toLightmode.style.display = 'block';
        root_theme.style.setProperty("--background", "#212121");
        root_theme.style.setProperty("--text-color-dark", "#505050");
        root_theme.style.setProperty("--text-color-light", "#f3f3f3");
        root_theme.style.setProperty("--third-comp-green-trans-more", "#f3f3f310");
        root_theme.style.setProperty("--img-background", "#50505000");
        root_theme.style.setProperty("--nav-background", "#212121e3");
        root_theme.style.setProperty("--vav-shadow", "#212121");
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
        root_theme.style.setProperty("--nav-background", "#f3f3f3e3");
        root_theme.style.setProperty("--vav-shadow", "#f3f3f3");
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

/** swiper */
const swiper = new Swiper('.skillsBox', {
    // Optional parameters
    loop: true,
    initialSlide: 0,
    speed: 400,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Default parameters
    slidesPerView: 6,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 7,
            spaceBetween: 40
        },
    }
});

/* video speed up*/
var video = document.getElementById("video");
video.playbackRate = 2.0;

/* show more of projects */
function showMore(project) {
    var x = document.getElementById(project);
    var y = document.getElementById(project + "Card");
    let arr = ['dashboard','ecommerce','Athar', 'hima', 'nlp', 'Alnorain', 'gameso', 'hotel', 'charReco', 'badan', 'Minecraft'];
    arr = arr.filter(e => e !== project);
    for (let i = 0; i < arr.length; i++) {
        var z = document.getElementById(arr[i]);
        var l = document.getElementById(arr[i] + "Card");
        z.style.display = "none";
        l.style.display = "flex";
    }
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.style.display = "flex";
        
    } else {
        x.style.display = "flex";
        y.style.display = "none";
        x.scrollIntoView({behavior: 'smooth' });
    }
}
function closeP(project) {
    var x = document.getElementById(project);
    var y = document.getElementById(project + 'Card');
    x.style.display = "none";
    y.style.display = "flex";
}

/* email js */
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactFormContainer = document.getElementById('contact-form-container');

const sendEmail = (e) => {
    e.preventDefault();
    if (!validation()) {
        return
    }
    emailjs.sendForm('service_ws6nqsw', 'template_6lxvmke', '#contact-form', 'WHLR-vKw2EID6qoZ4')
        .then(() => {
            contactFormContainer.style.display = 'none';
            contactMessage.style.display = 'grid';
            setTimeout(() => {
                contactFormContainer.style.display = 'flex';
                contactMessage.style.display = 'none';
            }, 5000)
        })
};
if (contactForm) {
    contactForm.addEventListener('submit', sendEmail);
}

function validation() {
    let email = document.forms['contact-form']['user_email'].value;
    let message = document.forms['contact-form']['message'].value;
    let msg_error = document.getElementById('msg_error');
    let msg_error_txt = document.getElementById('msg_error_text');
    if (email == '') {
        msg_error.style.display = 'flex';
        msg_error_txt.textContent = 'email must be filled';
        setTimeout(() => {
            msg_error.style.display = 'none';
            msg_error_txt.textContent = '';
        }, 3000)
        return false;
    }
    else if (message == '') {
        msg_error_txt.textContent = 'message must be filled';
        msg_error.style.display = 'flex';
        setTimeout(() => {
            msg_error.style.display = 'none';
            msg_error_txt.textContent = '';
        }, 3000)
        return false;
    }
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!String(email).toLowerCase().match(re)) {
        msg_error_txt.textContent = 'email is not valid';
        msg_error.style.display = 'flex';
        setTimeout(() => {
            msg_error.style.display = 'none';
            msg_error_txt.textContent = '';
        }, 5000)
        return false;
    }


    return true
}

function zoom(num) {
    let imgcontainer = document.getElementById('image-container' + num);
    if (imgcontainer) {
        imgcontainer.style.display = 'flex';
    }
}
function zoomout(num) {
    let imgcontainer = document.getElementById('image-container' + num);
    if (imgcontainer) {
        imgcontainer.style.display = 'none';
    }
}

function certificate(id) {
    let certificate = document.getElementById(id);

    if (certificate.classList.contains('certificate-container-clicked')) {
        certificate.classList.remove('certificate-container-clicked')
        return;
    }
    let arr = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', '10', 'c11', 'c12', 'c13', 'c14', 'c15', 'c16', 'c17'];
    arr = arr.filter(e => e !== id);
    for (let i = 0; i < arr.length; i++) {

        var z = document.getElementById(arr[i]);
        if (z) {
            if (z.classList.contains('certificate-container-clicked')) {
                z.classList.remove('certificate-container-clicked')
            }
        }


    }
    console.log(' clicked');
    if (certificate) {
        certificate.classList.add('certificate-container-clicked')
    }
}

function experDetails() {
    let experlist = document.getElementById("experlist");
    let experimg = document.getElementById("experimg");
    let btndetails = document.getElementById("btn-exp-details");
    let expercontainer = document.getElementById("exper-container");
    if (experlist.classList.contains('exper-details')) {
        experlist.classList.remove('exper-details');
        experimg.classList.remove('exper-details');
        expercontainer.style.backgroundColor="#58588433";
        btndetails.innerHTML="hide";
        return;
    }
    experlist.classList.add('exper-details');
    experimg.classList.add('exper-details');
    expercontainer.style.backgroundColor="#50505000";
    btndetails.innerHTML="show details";
    
}