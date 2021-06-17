let dropDown = document.querySelector('.btnBurger');
let hamburger = document.querySelector('.hamburger');
let cross = document.querySelector('.close');
let wrapper = document.querySelector('.menu');

dropDown.addEventListener('click', () => {
    if (wrapper.style.display==="none") {
        wrapper.style.display="block";
        hamburger.style.display="none";
        cross.style.display="block";
    } else {
        wrapper.style.display="none";
        hamburger.style.display="block";
        cross.style.display="none";
    }
})
