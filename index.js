import{i as n,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();document.querySelector(".search-list");function p(t){const o=new URLSearchParams({key:"38293986-7ee0e252210be96ee05c3f9f8",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9,page:1});return fetch(`https://pixabay.com/api/?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).catch(s=>{throw console.error("Error fetching images:",s),s})}function g(t){return t.map(o=>{const{largeImageURL:s,webformatURL:a,tags:e,likes:r,views:i,comments:f,downloads:h}=o;return`
    <div class="card">
  <a class='card_link' href='${s}'><img src="${a}" alt="${e}" loading="lazy" /></a>
  <div class="info">
    <p class="info_item">
      <b>Likes</b>
      <b>${r}</b>
    </p>
    <p class="info_item">
      <b>Views</b>
      <b>${i}</b>
    </p>
    <p class="info_item">
      <b>Comments</b>
      <b>${f}</b>
    </p>
    <p class="info_item">
      <b>Downloads</b>
      <b>${h}</b>
    </p>
  </div>
</div>`}).join("")}const u=document.querySelector(".search-list"),y=document.querySelector(".btn"),b=document.querySelector(".search-input");let l="",c;function L(){const t=document.querySelector(".loader");t.style.display="block"}function d(){const t=document.querySelector(".loader");t.style.display="none"}d();b.addEventListener("input",t=>{l=t.currentTarget.value});y.addEventListener("click",t=>{if(t.preventDefault(),!l){n.error({title:"Error",message:"Please fill out search field"});return}p(l).then(o=>{if(o.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(),u.innerHTML="";const s=g(o.hits);u.insertAdjacentHTML("beforeend",s),c?c.refresh():c=new m(".search-list a",{captions:!0,captionsData:"alt",captionDelay:250})}).catch(o=>{n.error({title:"Error",message:"Failed to fetch images"}),console.error("Error fetching images:",o)}).finally(()=>{d()})});
//# sourceMappingURL=index.js.map
