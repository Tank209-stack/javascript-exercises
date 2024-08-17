const container = document.querySelector("#container");
const p = document.createElement("p");
const h3 = document.createElement("h3");
const div_2 = document.createElement("div");
const hone = document.createElement("h1");
const ptwo = document.createElement("p");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
p.textContent = "Hey im red!"
p.style.color = "red";
h3.textContent = "I'm a blue h3";
h3.style.color = "blue";
div_2.style.border ="black";
div_2.style.backgroundColor ="pink";
hone.textContent = "i'm in a div";
ptwo.textContent = "ME TOO"

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3)
container.appendChild(div_2)
div_2.appendChild(hone)
div_2.appendChild(ptwo)
const btn = document.querySelectorAll("#btn")
btn.forEach((buttons)=>{
    buttons.addEventListener("click" ,()=>{alert(buttons.id)})
})
