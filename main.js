let dark = document.getElementById("sun");
let header = document.getElementById("header");
let li = document.querySelectorAll(".header ul li a");
let body = document.querySelector("body");

dark.addEventListener("click", function(){
    this.classList.toggle("fa-moon");
    
    if(this.classList.toggle("fa-sun")){
        
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = "2s";
        
        header.style.background = 'white';
        header.style.color = 'black';
        header.style.transition = "2s";
    
        li.forEach(function(item){
            item.style.color = '#121212';
            item.style.transition = "2s";
        });
        
    } else {
        
        body.style.background = "#121212";
        body.style.color = "white";
        body.style.transition = "2s";
        
        header.style.background = '#121212';
        header.style.color = 'white';
        header.style.transition = "2s";
        
       
        li.forEach(function(item){
            item.style.color = '#ffffff';
            item.style.transition = "2s";
        });
    }
});

let links = document.querySelector(".links");
let menu = document.querySelector(".menu i")
menu/addEventListener("click", function testr(ele){
    if (links.style.top === "-1000px" || !links.style.top){
        links.style.top = "108%"
    }else{
        links.style.top = "-1000px"
    }
})


