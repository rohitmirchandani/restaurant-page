
  const menuDiv = document.createElement("div");
menuDiv.innerText="Menu";
menuDiv.classList.add("menu-div");
const menuItems =["Burger(can't be like this)","Pizza(wanna be round)","Indian(no comments)","Soup(may be hot)","Drinks(may be cold)","Sweets(may... god bless you)"];
const menuImageLocation =["http://www.pngmart.com/files/16/Bacon-Cheese-Burger-PNG-Transparent-Image.png","http://www.pngmart.com/files/1/Cheese-Pizza.png","http://www.pngmart.com/files/5/Indian-Food-PNG-Image.png","http://pngimg.com/uploads/soup/soup_PNG112.png","http://www.pngmart.com/files/8/Drink-PNG-Transparent.png","http://www.pngmart.com/files/15/Sweet-Bun-Cake-Transparent-PNG.png"];
for(let i=0;i<menuItems.length;i++){
  const menuItemDiv = document.createElement("div");
  const menuItemName = document.createElement("h2");
  const menuItemImage=document.createElement("img");
  menuItemDiv.classList.add("menu-item-div");
  menuItemImage.src=menuImageLocation[i];
  menuItemImage.alt=menuItems[i]+" Image";
  menuItemName.innerText=menuItems[i];
  menuItemDiv.appendChild(menuItemImage);
  menuItemDiv.appendChild(menuItemName);
  menuDiv.appendChild(menuItemDiv);
}
export {menuDiv};

