var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire92fb;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire92fb=o);var r=o("gKkQl"),i=o("jMLQ6");const s=(0,r.initializeApp)({apiKey:"AIzaSyD7SHFAIzoI8CNGbFmMeHZBfj8AgAlsMNw",authDomain:"zrozumiecpsieemocje.firebaseapp.com",projectId:"zrozumiecpsieemocje",storageBucket:"zrozumiecpsieemocje.appspot.com",messagingSenderId:"1064173396236",appId:"1:1064173396236:web:47f9659ef5c1f6240b6929",measurementId:"G-D038YQHZVF"}),a=(0,i.getFirestore)(s),c=(0,i.collection)(a,"services"),d=document.querySelector(".tos__content");(0,i.getDocs)(c).then((e=>{const n=e.docs.map((e=>e.data()));d.innerHTML="",n.forEach((e=>{const n=document.createElement("div");n.innerHTML=`<h3 class="tos__service-name">${e.name}:</h3>`;const t=document.createElement("p");t.classList.add("service-tos"),t.innerHTML=e.tos,d.insertAdjacentElement("afterbegin",t),d.insertAdjacentElement("afterbegin",n)}))}));
//# sourceMappingURL=terms-of-service.ea9969a9.js.map