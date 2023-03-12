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

const tosContent = document.querySelector('.tos__content');

getDocs(servicesRef).then(querySnapshot => {
  const input = querySnapshot.docs.map(doc => doc.data());
  tosContent.innerHTML = '';

  input.forEach(elem => {
    const header = document.createElement('div');
    header.innerHTML = `<h3 class="tos__service-name">${elem.name}:</h3>`;

    const tos = document.createElement('p');
    tos.classList.add('service-tos');
    tos.innerHTML = elem.tos;

    tosContent.insertAdjacentElement('afterbegin', tos);
    tosContent.insertAdjacentElement('afterbegin', header);
  });
});
