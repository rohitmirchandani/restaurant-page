import {aboutDiv} from "./about/about";
import {homeDiv} from "./home/home";
import {menuDiv} from "./menu/menu";
const homeButton = document.createElement("button");
const aboutButton = document.createElement("button");
const menuButton = document.createElement("button");
const container = document.querySelector("#container");
const body = document.querySelector("body");
aboutButton.innerText="About";
menuButton.innerText="Menu";
homeButton.innerText="Home";
const restaurantName = document.createElement("h1");
restaurantName.innerText="LE-KHANA"
container.appendChild(restaurantName);
container.appendChild(aboutButton);
container.appendChild(menuButton);
container.appendChild(homeButton);
body.appendChild(homeDiv);
body.appendChild(menuDiv);
body.appendChild(aboutDiv);
const buttonArray=[homeButton,aboutButton,menuButton];
const divArray = [homeDiv,aboutDiv,menuDiv];

buttonArray.forEach((element,index)=>{
  element.addEventListener("click",()=>{showDiv(index)})
})

function showDiv(index){
  divArray.forEach((element)=>{
    element.classList.remove("active");
  })
  buttonArray.forEach((element)=>{
    element.classList.remove("active-button");
  })
  buttonArray[index].classList.add("active-button");
  divArray[index].classList.add("active");
}