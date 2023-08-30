const icon = document.querySelectorAll(".icon");
for(let i = 0;i< icon.length ; i++){
    icon[i].addEventListener("mouseover",function(){
        icon[i].classList.add("fa-beat");
    });
    icon[i].addEventListener("mouseout",function(){
        icon[i].classList.remove("fa-beat");
    });    
}
