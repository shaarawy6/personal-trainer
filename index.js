const icon = document.querySelectorAll("footer .icon");
for(let i = 0;i< icon.length ; i++){
    icon[i].addEventListener("mouseover",function(){
        icon[i].classList.add("fa-beat");
    });
    icon[i].addEventListener("mouseout",function(){
        icon[i].classList.remove("fa-beat");
    });    
}

const menu = document.querySelector("#nav i");
const content = document.querySelector("#nav .content");
const logo = document.querySelector("#nav img");
const main = document.querySelector("#main");
const plans = document.querySelector("#plans");
const transformations = document.querySelector("#transformations");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
// hover and click
menu.addEventListener("mouseover",function(){
    content.style.display = "flex";
    menu.classList.add("open");
    logo.style.width = "15%";

    main.addEventListener("click",function(){
        content.style.display = "none";
        menu.classList.remove("open");
        logo.style.width = "8%";
    });
    
    plans.addEventListener("click",function(){
        content.style.display = "none";
        menu.classList.remove("open");
        logo.style.width = "8%";
    });
    
    transformations.addEventListener("click",function(){
        content.style.display = "none";
        menu.classList.remove("open");
        logo.style.width = "8%";
    });
    
    about.addEventListener("click",function(){
        content.style.display = "none";
        menu.classList.remove("open");
        logo.style.width = "8%";
    });
    
    contact.addEventListener("click",function(){
        content.style.display = "none";
        menu.classList.remove("open");
        logo.style.width = "8%";
    });
});

menu.addEventListener("click",function(){
    content.style.display = "flex";
    menu.classList.add("open");
    logo.style.width = "15%";

    main.addEventListener("click",function(){
        content.style.display = "none";
        menu.classList.remove("open");
        logo.style.width = "8%";
    });
    
    plans.addEventListener("click",function(){
        content.style.display = "none";
        menu.classList.remove("open");
        logo.style.width = "8%";
    });
    
    transformations.addEventListener("click",function(){
        content.style.display = "none";
        menu.classList.remove("open");
        logo.style.width = "8%";
    });
    
    about.addEventListener("click",function(){
        content.style.display = "none";
        menu.classList.remove("open");
        logo.style.width = "8%";
    });
    
    contact.addEventListener("click",function(){
        content.style.display = "none";
        menu.classList.remove("open");
        logo.style.width = "8%";
    });
});
