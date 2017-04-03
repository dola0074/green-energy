var images, 
    currentSlide,
    slides,
    buttons,
    container,
    contents,
    nextSlide,
    i,
    k;

images = [
    "<figure><img src=\"./img/ad_solar.jpg\" alt=\"solar\"></figure><figcaption>SOLAR</figcaption>",
    "<figure><img src=\"./img/advert_ecobulb.jpg\" alt=\"ecobulb\"></figure><figcaption>ECOBULB</figcaption>",
    "<figure><img src=\"./img/bottles_ad2.jpg\" alt=\"bottles\"></figure><figcaption>BOTTLES</figcaption>",
    "<figure><img src=\"./img/creating_crafting.jpg\" alt=\"crafting\"></figure><figcaption>CRAFTING</figcaption>"
];


var slides = document.querySelector('.banner');
var currentSlide = 0;

function nextSlide() {
    if (currentSlide < images.length) {
        slides.innerHTML = images[currentSlide];
        currentSlide += 1;
        //      alert(currentSlide);
        if (currentSlide === images.length) {
            currentSlide = 0;
        }
    }
}

window.setInterval(nextSlide, 6000);
/*
--------------------------------
PART 2: REVEAL-HIDE MAIN-CONTENT
-------------------------------- */
/* 
Collect all buttons in array buttons. */
buttons = document.querySelectorAll(".btn");
/*
Have all contents in array contents. */
contents = [
    "<figure><img src=\"./img/eco-buld-prog.jpg\" alt=\"solar\"></figure><figcaption>ECOBULB</figcaption>",
    "<figure><img src=\"./img/wind_energy_ad.jpg\" alt=\"ecobulb\"></figure><figcaption>ECOBULB</figcaption>",
    "<figure><img src=\"./img/solar_panel_ad.jpg\" alt=\"bottles\"></figure><figcaption>BOTTLES</figcaption>"
];
/*
Access div with the class "container"
and pass the reference to variable container.*/
container = document.querySelector(".container");
/*
Pass the value of the first array-element of array contents
to container (use innerHTML on container). */
container.innerHTML = contents[0];
/* 
Define function handleClick 
(pass event object to function) */
function handleClick(ev) {
    console.log(ev.target.innerHTML);
    for (i = 0; i < buttons.length; i += 1) {
        if (buttons[i].hasAttributes("id")) {
            buttons[i].removeAttribute("id");
        }
    }
    if (ev.target.innerHTML === "1") {
        container.innerHTML = contents[0];
    }
    if (ev.target.innerHTML === "2") {
        container.innerHTML = contents[1];
    }
    if (ev.target.innerHTML === "3") {
        container.innerHTML = contents[2];
    }
    ev.target.parentNode.setAttribute("id", "active");
}
for (k = 0; k < buttons.length; k += 1) {
    buttons[k].addEventListener("click", handleClick, false);
}
