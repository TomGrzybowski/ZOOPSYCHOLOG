!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=e.parcelRequire92fb;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var r=n[e];delete n[e];var c={id:e,exports:{}};return i[e]=c,r.call(c.exports,c,c.exports),c.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,i){n[e]=i},e.parcelRequire92fb=r);var c=r("fkNhc"),o=r("587DK"),t=(0,c.initializeApp)({apiKey:"AIzaSyD7SHFAIzoI8CNGbFmMeHZBfj8AgAlsMNw",authDomain:"zrozumiecpsieemocje.firebaseapp.com",projectId:"zrozumiecpsieemocje",storageBucket:"zrozumiecpsieemocje.appspot.com",messagingSenderId:"1064173396236",appId:"1:1064173396236:web:47f9659ef5c1f6240b6929",measurementId:"G-D038YQHZVF"}),a=(0,o.getFirestore)(t),s=(0,o.collection)(a,"services"),p=document.querySelector(".pricing__list");(0,o.getDocs)(s).then((function(e){var i=e.docs.map((function(e){return e.data()}));p.innerHTML="",i.forEach((function(e){var i=document.createElement("li");i.classList.add("pricing__item"),i.innerHTML='<span class="pricing__service-name">'.concat(e.name,'</span><span class="pricing__service-price service-price">').concat(e.price," zł</span>"),p.insertAdjacentElement("afterbegin",i)}))}))}();
//# sourceMappingURL=pricing.fa3ae37c.js.map