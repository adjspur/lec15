import { picData } from "./pic-data.js";
let img = document.createElement("img");
img.src = `https://picsum.photos/id/${picData.id}/${picData.width}`;
document.querySelector("div").append(img);
