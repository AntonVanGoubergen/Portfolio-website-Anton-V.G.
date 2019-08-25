var mycss = document.querySelector("#darkmodecss");


window.onscroll = function() {myFunction()};


var header = document.getElementById("header");


var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function toggleDarkMode() {
  if(mycss.getAttribute("href") === "light.css"){
    mycss.setAttribute("href", "darkAbout.css");
  }else{
    mycss.setAttribute("href", "light.css");
  }
}
