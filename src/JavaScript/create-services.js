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

const servicesContainer = document.querySelector('.services__container');

getDocs(servicesRef).then(querySnapshot => {
  const input = querySnapshot.docs.map(doc => doc.data());
  servicesContainer.innerHTML = '';

  input.forEach(elem => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    cardContainer.innerHTML = `
    <div class="card-container">
      <section class="card">
      <h2 class="service-name">${elem.name}</h2>
        <div class="service-price">${elem.price}zł</div>
        <p class="service-description">
          ${elem.description}
        </p></section>
    </div>`;

    servicesContainer.insertAdjacentElement('afterbegin', cardContainer);
  });
});
