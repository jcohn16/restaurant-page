(()=>{"use strict";const e=()=>{const e=document.querySelector("#content");e.appendChild(function(){const e=document.createElement("div");e.id="titleDiv";const t=document.createElement("h1");return t.id="title",t.innerHTML="Ice Cream Shop",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.id="descriptionDiv";const t=document.createElement("p");return t.id="description",t.innerHTML="It's an ice cream shop.  There is not much to describe.  Anyways... here are some pictures of puppies!",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");return e.id="photoAlbum",e.appendChild(t("7puppies")),e.appendChild(t("5puppies")),e.appendChild(t("runningPuppies")),e.appendChild(t("dressedUpPuppies")),e}())};function t(e){const t=document.createElement("div");t.classList.toggle("puppyPhotoDiv");const n=document.createElement("img");return n.src=`images/puppies/${e}.jpg`,n.alt=`${e}`,n.classList.toggle("puppyPhoto"),t.appendChild(n),t}!function(){const t=document.querySelector("#container");t.appendChild(function(){const t=document.createElement("div");t.id="tabs";const n=document.createElement("div");n.id="homeTabDiv",t.appendChild(n);const c=document.createElement("button");c.id="homeTabBtn",c.innerHTML="Home",n.appendChild(c);const d=document.createElement("div");d.id="menuTabDiv",t.appendChild(d);const i=document.createElement("button");i.id="menuTabBtn",i.innerHTML="Menu",d.appendChild(i);const o=document.createElement("div");o.id="contactTabDiv",t.appendChild(o);const l=document.createElement("button");return l.id="contactTabBtn",l.innerHTML="Contact",o.appendChild(l),c.classList.toggle("selected"),function(){function t(){for(;content.firstChild;)content.removeChild(content.firstChild);document.querySelector(".selected").classList.toggle("selected")}c.addEventListener("click",(()=>{t(),c.classList.toggle("selected"),e()})),i.addEventListener("click",(()=>{t(),i.classList.toggle("selected"),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="titleDiv",e.appendChild(t)})()})),l.addEventListener("click",(()=>{t(),l.classList.toggle("selected"),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="titleDiv",e.appendChild(t)})()}))}(),t}()),t.appendChild(function(){const e=document.createElement("div");return e.id="content",e}()),t.appendChild(function(){const e=document.createElement("div");return e.id="footer",e}()),e()}()})();