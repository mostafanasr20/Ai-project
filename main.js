let icon = document.getElementById("sun");
let body = document.body;

icon.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
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


