window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    var toTop = document.querySelector(".to-top");
    header.classList.toggle("sticky", window.scrollY > 0);
    if(window.pageYOffset > 100) {
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
