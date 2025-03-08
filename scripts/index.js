const menu = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menu.addEventListener('click', () => {
    if(navMenu.style.display == 'none') {
        navMenu.style.display = 'block';
        setTimeout(() => navMenu.style.width = '200px', 1);
        menu.innerHTML = '<span class="material-symbols-outlined">close</span>';
    } else {
        navMenu.style.width = '10px';
        setTimeout(() => navMenu.style.display = 'none', 300);
        menu.innerHTML = '<span class="material-symbols-outlined">menu</span>';
    } 
});

const box1 = document.querySelector('#images-1');
const box2 = document.querySelector('#images-2');
const box3 = document.querySelector('#images-3');
const box4 = document.querySelector('#images-4');

const images1 = document.querySelectorAll('#images-1 img');
const images2 = document.querySelectorAll('#images-2 img');
const images3 = document.querySelectorAll('#images-3 img');
const images4 = document.querySelectorAll('#images-4 img');

function callSlider(box, img) {
    if (!box || img.length === 0) return;

    let count = 0;

    function slider() {
        count++;

        if(count > img.length - 1) {
            count = 0;
        }

        box.style.transform = `translateX(${-count * 100}%)`;
    }

    setInterval(slider, 2000);
}

callSlider(box1, images1);
callSlider(box2, images2);
callSlider(box3, images3);
callSlider(box4, images4);

//Input masks
$('#tel').mask('00 000 0000');

//Reservations

//Verify book.html page
const urlParams = new URLSearchParams(window.location.search);

if(window.location.pathname == '/book.html') {
    console.log('bingo');
    if(urlParams.get('event')) {
        document.getElementById("form").scrollIntoView({ behavior: "smooth" });
        document.getElementById('choose').value = urlParams.get('event');
    }
}

function getInputValues() {
    return {
        name: document.getElementById('username').value,
        tel: document.getElementById('tel').value,
        message: document.getElementById('message').value,
        event: document.getElementById('choose').value
    }
}

const whatsappButton = document.querySelector('.whatsapp-btn');
const emailButton = document.querySelector('.email-btn');

whatsappButton.addEventListener('click', (e) => {
    // e.preventDefault();
    const link = whatsappButton.parentElement;
    const data = getInputValues();

    const message = `*Nome*: ${data.name}%0A*Telefone*: ${data.tel}%0A%0A*Mensagem*: ${data.message}%0A%0A*Tipo de evento*:${data.event}`;
     
    link.href = `https://wa.me/258876494529?text=${message}`;
});

emailButton.addEventListener('click', (e) => {
    // e.preventDefault();
    const link = emailButton.parentElement;
    const data = getInputValues();

    link.href = `mailto:es7.comercial@gmail.com?subject=Reserva de Evento&body=Nome: ${data.name}%0ATelefone: ${data.tel}%0A%0AMensagem: ${data.message}%0A%0ATipo de evento: ${data.event}`;
});