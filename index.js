const navContent = document.querySelectorAll("#nav a");
const icon = document.querySelectorAll(".icon");

for(let i = 0;i< navContent.length ; i++){
    navContent[i].addEventListener("mouseover",function(){
        navContent[i].classList.add("fa-beat");
    });
    navContent[i].addEventListener("mouseout",function(){
        navContent[i].classList.remove("fa-beat");
    });    
}

for(let i = 0;i< icon.length ; i++){
    icon[i].addEventListener("mouseover",function(){
        icon[i].classList.add("fa-beat");
    });
    icon[i].addEventListener("mouseout",function(){
        icon[i].classList.remove("fa-beat");
    });    
}