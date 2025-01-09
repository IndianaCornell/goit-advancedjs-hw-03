import{i as a,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();document.querySelector(".search-list");function p(t){const o=new URLSearchParams({key:"38293986-7ee0e252210be96ee05c3f9f8",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9,page:1});return fetch(`https://pixabay.com/api/?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).catch(s=>{throw console.error("Error fetching images:",s),s})}function g(t){return t.map(o=>{const{largeImageURL:s,webformatURL:n,tags:e,likes:r,views:i,comments:f,downloads:h}=o;return`
    <div class="card">
  <a class='card_link' href='${s}'><img src="${n}" alt="${e}" loading="lazy" /></a>
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
</div>`}).join("")}const c=document.querySelector(".search-list"),y=document.querySelector(".btn"),b=document.querySelector(".search-input");let u="",l;function d(){const t=document.querySelector(".loader");t.style.display="block"}function L(){const t=document.querySelector(".loader");t.style.display="none"}b.addEventListener("input",t=>{u=t.currentTarget.value});y.addEventListener("click",t=>{if(t.preventDefault(),d(),console.log(d),!u){a.error({title:"Error",message:"Please fill out search field"});return}c.innerHTML="",p(u).then(o=>{if(o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="";return}setTimeout(()=>{L();const s=g(o.hits);c.insertAdjacentHTML("beforeend",s),l?l.refresh():l=new m(".search-list a",{captions:!0,captionsData:"alt",captionDelay:250})},1e3)}).catch(o=>{a.error({title:"Error",message:"Failed to fetch images"}),console.error("Error fetching images:",o)}).finally(()=>{})});
//# sourceMappingURL=index.js.map
