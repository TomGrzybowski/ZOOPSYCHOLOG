import { initializeApp } from 'firebase/app';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyD7SHFAIzoI8CNGbFmMeHZBfj8AgAlsMNw',
  authDomain: 'zrozumiecpsieemocje.firebaseapp.com',
  projectId: 'zrozumiecpsieemocje',
  storageBucket: 'zrozumiecpsieemocje.appspot.com',
  messagingSenderId: '1064173396236',
  appId: '1:1064173396236:web:47f9659ef5c1f6240b6929',
  measurementId: 'G-D038YQHZVF',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const servicesRef = collection(db, 'services');

const pricingList = document.querySelector('.pricing__list');

getDocs(servicesRef).then(querySnapshot => {
  const input = querySnapshot.docs.map(doc => doc.data());
  pricingList.innerHTML = '';

  input.forEach(elem => {
    const li = document.createElement('li');
    li.classList.add('pricing__item');
    li.innerHTML = `<span class="pricing__service-name">${elem.name}</span><span class="pricing__service-price service-price">${elem.price} zł</span>`;

    pricingList.insertAdjacentElement('afterbegin', li);
  });
});
