
const grinan = document.querySelector("#grinan");
const g = document.querySelector("#g")
const victor = document.querySelector("#victor");
const v = document.querySelector("#v")
const flying1 = document.querySelector("#welcome-to");
const flying2 = document.querySelector("#intro");
const showAllBtn = document.querySelector("#showAll");
const secundaries = document.querySelectorAll(".secundary");
const projects = document.querySelectorAll(".projects");
const scrollUp = document.querySelector(".scrollUp");
const menuBar = document.querySelector("#menuBar"); 
const tabs = document.querySelectorAll("tab");
const developer = document.querySelector(".developer");
const portfolio = document.querySelector(".portfolioWord")
const collapse = document.querySelector(".collapse");

//collapse menu
collapse.style.backgroundColor="white";
collapse.style.padding="10px";

//logo flying animation
let angle = 0;
let lastTime = null;

const Fly = (time) => {
    if (lastTime != null) angle += (time - lastTime) * 0.002;
    lastTime = time;
    flying1.style.top = (Math.sin(angle) * 40 + 40) + "px";
    flying1.style.left = (Math.cos(angle) * 200 + 230) + "px";
    flying2.style.top = (Math.sin(angle + Math.PI) * 40 + 40) + "px";
    flying2.style.left = (Math.cos(angle + Math.PI) * 200 + 230) + "px";
    requestAnimationFrame(Fly, "animate");
}

Fly(lastTime);

//banner css explodes
let isV = false;
let isG = false;

//my name animation
const deattach = () => {  
    grinan.classList.add("deattach");
   
    if (grinan.classList[0] === "deattach"){
        g.style.color = "#ce5d5d"; 
        isG = true;
    }
}

const turnlight = () => {
    victor.classList.add("lightsOn");
    
    if (victor.classList[0] === "lightsOn"){
        v.style.color = "#ce5d5d";
        isV = true;     
    }
}

g.addEventListener("click", deattach);
v.addEventListener("click", turnlight);

const animatePorfolio = () => {
    if (victor.classList.includes(lightsOn)){
        portfolio.style.position = "absolute";
        portfolio.classList.add("spin");
    }
}

const spinDeveloper = () => {
    if(grinan.classList[0] === "deattach"){
        developer.style.position = "absolute";
        developer.classList.add("spin");
    }
};

victor.addEventListener("click", animatePorfolio);
grinan.addEventListener("click", spinDeveloper);

//hide/show projects
let is_showing = false;

const showAllProjects = () => {
    is_showing = !is_showing;
    for (let proj of secundaries){
        proj.classList.toggle("invisible");
        
    }
    if(is_showing){
        showAllBtn.textContent = "Show less";
    }else{
        showAllBtn.textContent = "Show all";
    }
}

showAllBtn.addEventListener("click", showAllProjects);

//scroll btn function 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUp.classList.remove("invisible");
    menuBar.style.backgroundColor = "rgb(6, 30, 51)";
  } else {
    scrollUp.classList.add("invisible");
    menuBar.style.backgroundColor = "";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scrollUp.addEventListener("click", topFunction);
