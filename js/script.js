// fixed navbar

let nav = document.querySelector(".header");

window.onscroll = () =>{
    if (document.documentElement.scrollTop > 40) {
        nav.classList.add("head-scrolled");
    } else {
        nav.classList.remove("head-scrolled");
    }
}