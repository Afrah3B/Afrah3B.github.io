/*-- show menu --*/
let navMenu = document.getElementById("navmenu"),
    openNav = document.getElementById("opennav"),
    closeNav = document.getElementById('closenav');

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

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
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
    let arr = ['hima', 'nlp', 'Alnorain', 'gameso', 'hotel', 'charReco', 'badan', 'Minecraft'];
    arr = arr.filter(e => e !== project);
    for (let i = 0; i < arr.length; i++) {
        var z = document.getElementById(arr[i]);
        var l = document.getElementById(arr[i] + "Card");
        z.style.display = "none";
        l.style.display = "block";
    }
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}
function closeP(project) {
    var x = document.getElementById(project);
    var y = document.getElementById(project + 'Card');
    x.style.display = "none";
    y.style.display = "block";
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

function certificate(id){
    let certificate = document.getElementById(id);
    
    if(certificate.classList.contains('certificate-container-clicked')){
        certificate.classList.remove('certificate-container-clicked')
        return;
    }
    let arr = ['c1','c2','c3','c4','c5','c6','c7','c8','c9','10','c11','c12','c13','c14','c15','c16','c17'];
    arr = arr.filter(e => e !== id);
    for (let i = 0; i < arr.length; i++) {
        
        var z = document.getElementById(arr[i]);
        if(z){
            if(z.classList.contains('certificate-container-clicked')){
            z.classList.remove('certificate-container-clicked')
        }
        }
        
        
    }
    console.log(' clicked');
    if(certificate){
        certificate.classList.add('certificate-container-clicked')
    }
}

