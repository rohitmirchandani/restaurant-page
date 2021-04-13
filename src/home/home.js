const homeDiv = document.createElement("div");
const headingArray = ['An Average Asian Cuisin','Address',"Menu",'Reservations','Delivery'];
const contentArray =["Being Average is our top priority.","Shaitan Gali, Khatra Mehal, Shamshan Ke Saamne.","Our Motto is Simple : Pay High, Get Average.","Our Reservations are totally biased, if you can pay us more at the last moment, We can kick out other ones.","We can provide home deleiveries too, if you can pay us for fuel."];
for(let i=0;i<4;i++){
const heading = document.createElement("h1");
const content = document.createElement("h2");
heading.innerText=headingArray[i];
content.innerText=contentArray [i]
homeDiv.appendChild(heading);
homeDiv.appendChild(content);
}
homeDiv.classList.add("home-div");
homeDiv.classList.add("active");
export {homeDiv};