import { data, quti, uy, yu, xokim, } from "./data.js";
const nar = document.querySelector("ul");

data.map((item) => {
  nar.innerHTML += ` <li><a href="${item.link}">${item.type}</a ></li>
     `;
});

const blu = document.querySelector(".blu");
quti.map((item) => {
  blu.innerHTML += `
     <button><a href="#">${item.type}</a></button>
  `;
});

const bigbox = document.querySelector(".bigbox");
uy.map((item) => {
  bigbox.innerHTML += `
   <div class="home">
        <img src="	${item.rasm}" alt="" />
        <div class="osish">
          <h1>${item.hhh}</h1>
          <p>
            ${item.ppp}
          </p>
          <h3>${item.b}</h3>
        </div>
      </div>
  `;
});

const bigbox2 = document.querySelector(".bigbox2");
yu.map((item) => {
  bigbox2.innerHTML += `
   <div class="home"><img src="	${item.rasm}" alt="" /><div class="osish"><h1>${item.hhh}</h1><p>${item.ppp}</p><h3>${item.b}</h3></div></div>
  `;
});

let ozgar = i.url;
const gal = document.querySelector("gal");
xokim.map((i) => {
  gal.innerHTML += `<div class="">
  <div> <img src="${i.url}" alt=""></div>
    <div><div> <img src="" alt=""></div><div> <img src="" alt=""></div></div>
  </div>
  <div class="">
    <div><div> <img src="" alt=""></div><div> <img src="" alt=""></div></div>
    <div> <img src="" alt=""></div>
  </div>
  `;
});
