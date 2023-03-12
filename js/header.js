const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const headerDiv = document.querySelector("header");
const body = document.querySelector("body");

/**toggle menu*/
function toggleMenu(){
    menu.classList.toggle("open");
    hamburger.classList.toggle("rotate");

    body.classList.toggle("no-scroll");

}

/**hide header on scroll down*/
let prevScrollpos = window.scrollY;
let headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;
window.onscroll = function() {
    let currentScrollPos = window.scrollY;

    if (prevScrollpos > currentScrollPos  || currentScrollPos < headerBottom){
        headerDiv.style.top = "0";
    }
    else{
        /* otherwise we"re scrolling down & have passed the header so hide it */
        headerDiv.style.top = "-7.2rem";
    }

    prevScrollpos = currentScrollPos;
}

/**smooth scroll*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});