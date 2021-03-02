const moveSpans = () => {
    let spanLeft = document.getElementById("tagLeft");
    let spanRight = document.getElementById("tagRight");

    let logo = document.getElementById("logo");

    logo.onmouseover = function () {
        spanLeft.style.padding = "0 30px";
        spanLeft.style.transition = "0.5s";
        spanRight.style.padding = "0 30px";
        spanRight.style.transition = "0.5s";
    }

    logo.onmouseout = function () {
        spanLeft.style.padding = "0 10px";
        spanLeft.style.transition = "0.5s";
        spanRight.style.padding = "0 10px";
        spanRight.style.transition = "0.5s";
    }
}

let navSlide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links-mobile');
    let navLinks = document.querySelectorAll('.nav-links-mobile li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animated Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });


}

moveSpans();
navSlide();