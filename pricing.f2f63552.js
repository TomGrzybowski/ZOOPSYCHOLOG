var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=e.parcelRequire92fb;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return i[e]=o,r.call(o.exports,o,o.exports),o.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,i){n[e]=i},e.parcelRequire92fb=r);var o=r("gKkQl"),t=r("jMLQ6");const c=(0,o.initializeApp)({apiKey:"AIzaSyD7SHFAIzoI8CNGbFmMeHZBfj8AgAlsMNw",authDomain:"zrozumiecpsieemocje.firebaseapp.com",projectId:"zrozumiecpsieemocje",storageBucket:"zrozumiecpsieemocje.appspot.com",messagingSenderId:"1064173396236",appId:"1:1064173396236:web:47f9659ef5c1f6240b6929",measurementId:"G-D038YQHZVF"}),s=(0,t.getFirestore)(c),a=(0,t.collection)(s,"services"),p=document.querySelector(".pricing__list");(0,t.getDocs)(a).then((e=>{const i=e.docs.map((e=>e.data()));p.innerHTML="",i.forEach((e=>{const i=document.createElement("li");i.classList.add("pricing__item"),i.innerHTML=`<span class="pricing__service-name">${e.name}</span><span class="pricing__service-price service-price">${e.price} zł</span>`,p.insertAdjacentElement("afterbegin",i)}))}));
//# sourceMappingURL=pricing.f2f63552.js.map
