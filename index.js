
//toggle icon nav bar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// *******scroll section*******
let sections=document.querySelector('section');
let navLinks=document.querySelector('header nav a');

window.onscroll = () =>{

    sections.forEach(sec => {
        let top= window.scrollY;
        let offset=sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top >= offset && top< offset + height) {
            //active navbar links
            navLinks.forEach(links => {

            })
        }

    });
    //sticky header
    let header =document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100 );
}