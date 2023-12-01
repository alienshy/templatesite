document.addEventListener("DOMContentLoaded", function() {
    let nav = document.querySelector("nav");
    let greendiv = document.querySelector(".greendiv");
    let whitediv = document.querySelector(".whitediv");  /* Yeni eklenen satır */

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            nav.classList.add("nav-scrolled");
            greendiv.style.display="none"
            greendiv.style.transform = "translateY(-100px)";
            whitediv.style.backgroundColor = "black";  /* Yeni eklenen satır */
        } else {
            nav.classList.remove("nav-scrolled");
            greendiv.style.display=""
            greendiv.style.transform = "translateY(0)";
            whitediv.style.backgroundColor = "white";  /* Yeni eklenen satır */
        }
    };
});
