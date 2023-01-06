import "./style.scss";
import { mult, sum } from "./modules/calc";
import cat from "./imgs/cat.jpg";

const image = new Image();
image.src = cat;

console.log("Hello");
console.log(mult(3, 3));
console.log(sum(3, 3));

const cat2 = document.querySelector(".image2");
cat2.setAttribute("src", image.src);
cat2.style.width = "400px";
