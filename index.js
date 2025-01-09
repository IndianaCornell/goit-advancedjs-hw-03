(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(o){return o.map(s=>{const{largeImageURL:r,webformatURL:c,tags:e,likes:t,views:n,comments:a,downloads:l}=s;return`
    <div class="card">
  <a class='card_link' href='${r}'><img src="${c}" alt="${e}" loading="lazy" /></a>
  <div class="info">
    <p class="info_item">
      <b>Likes</b>
      <b>${t}</b>
    </p>
    <p class="info_item">
      <b>Views</b>
      <b>${n}</b>
    </p>
    <p class="info_item">
      <b>Comments</b>
      <b>${a}</b>
    </p>
    <p class="info_item">
      <b>Downloads</b>
      <b>${l}</b>
    </p>
  </div>
</div>`}).join("")}const f=document.querySelector(".search-list");function d(o){const s=new URLSearchParams({key:"38293986-7ee0e252210be96ee05c3f9f8",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9,page:1});fetch(`https://pixabay.com/api/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{f.insertAdjacentHTML("beforeend",u(r.hits))}).catch(r=>{console.error("Error fetching images:",r)})}const p=document.querySelector(".btn"),m=document.querySelector(".search-input");let i="";m.addEventListener("input",o=>{i=o.currentTarget.value});p.addEventListener("click",o=>{o.preventDefault(),d(i)});
//# sourceMappingURL=index.js.map
