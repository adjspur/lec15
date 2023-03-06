import { picData } from "./data/pic-data.js";
import { picsumImg } from "./helpers/picsum-helpers.js";

let img = picsumImg(picData);

document.querySelector("div").append(img);
