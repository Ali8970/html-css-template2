document.querySelectorAll(".javas li a").forEach(a => {
    a.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
})

let skill = document.querySelector(".skills");
let spans = document.querySelectorAll(".prog span");
window.onscroll = () => {
    if(window.scrollY >= skill.offsetTop -50){
        spans.forEach(span => {
            span.style.width = span.dataset.progess;
        })
    }
}




let allimage = ["../images/01.jpg","../images/02.jpg","../images/03.jpg","../images/04.jpg","../images/05.jpg"];
let landingbackground = document.querySelector(".landing");
document.getElementById("iconleft").addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * allimage.length);
    landingbackground.style.backgroundImage = 'url("images/' + allimage[randomNum] + '")';
})

document.getElementById("iconright").addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * allimage.length);
    landingbackground.style.backgroundImage = 'url("images/' + allimage[randomNum] + '")';
})


let menu = document.querySelector("nav .menu");
menu.addEventListener("click", (e) => {
    menu.classList.toggle("open");
})