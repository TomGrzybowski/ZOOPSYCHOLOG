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

const imageList = [
  {
    html: `<img
        class="tos__image"
        src="./assets/photo-2-911.jpg"
        srcset="
          ./assets/photo-2-911.jpg   911w,
          ./assets/photo-2-1821.jpg 1821w,
          ./assets/photo-2-3642.jpg 3642w
        "
        sizes="(min-width: 1200px) 30vw, (min-width: 720x) 45vw, 95vw"
        alt="Owczarek niemiecki leżący na polnej drodze"
        title="Owczarek niemiecki"
      />`,
  },
  {
    html: `<img
        class="tos__image"
        src="./assets/photo-3-400.jpg"
        srcset="
          ./assets/photo-3-400.jpg   400w,
          ./assets/photo-3-600.jpg   600w,
          ./assets/photo-3-1200.jpg 1200w
        "
        sizes="(min-width: 1200px) 30vw, (min-width: 720x) 45vw, 95vw"
        alt="Kobieta głaszcząca psa"
        title="Głaszczę psa"
      />`,
  },
  {
    html: `<img
        class="tos__image"
        src="./assets/photo-4-1152.jpg"
        srcset="
          ./assets/photo-4-1152.jpg 1152w,
          ./assets/photo-4-2304.jpg 2304w,
          ./assets/photo-4-4608.jpg 4608w
        "
        sizes="(min-width: 1200px) 30vw, (min-width: 720x) 45vw, 95vw"
        alt="Pies Lessy biegnący po polu"
        title="Biegnący pies"
      />`,
  },
  {
    html: `<img
        class="tos__image"
        src="./assets/photo-6-267.jpg"
        srcset="
          ./assets/photo-6-267.jpg   267w,
          ./assets/photo-6-533.jpg   533w,
          ./assets/photo-6-1066.jpg 1066w
        "
        sizes="(min-width: 1200px) 30vw, (min-width: 720x) 45vw, 95vw"
        alt="Pies oparty o ławkę"
        title="Pies oparty o ławkę"
      />`,
  },
  {
    html: `<img
        class="tos__image"
        src="./assets/photo-11-1152.jpg"
        srcset="
          ./assets/photo-11-1152.jpg 1152w,
          ./assets/photo-11-2304.jpg 2304w,
          ./assets/photo-11-4608.jpg 4608w
        "
        sizes="(min-width: 1200px) 30vw, (min-width: 720x) 45vw, 95vw"
        alt="Owczarek na smyczy w parku"
        title="Owczarek na smyczy w parku"
      />`,
  },
  {
    html: `<img
        class="tos__image"
        src="./assets/photo-8-400.jpg"
        srcset="
          ./assets/photo-8-400.jpg   400w,
          ./assets/photo-8-800.jpg   800w,
          ./assets/photo-8-1600.jpg 1600w
        "
        sizes="(min-width: 1200px) 30vw, (min-width: 720x) 45vw, 95vw"
        alt="Pies przy jeziorze"
        title="Pies przy jeziorze"
      />`,
  },
  {
    html: `<img
        class="tos__image"
        src="./assets/photo-9-1152.jpg"
        srcset="
          ./assets/photo-9-1152.jpg 1152w,
          ./assets/photo-9-2304.jpg 2304w,
          ./assets/photo-9-4608.jpg 4608w
        "
        sizes="(min-width: 1200px) 30vw, (min-width: 720x) 45vw, 95vw"
        alt="Pies w lesie"
        title="Pies w lesie"
      />`,
  },
  {
    html: `<img
        class="tos__image"
        src="./assets/photo-10-1152.jpg"
        srcset="
          ./assets/photo-10-1152.jpg 1152w,
          ./assets/photo-10-2304.jpg 2304w,
          ./assets/photo-10-4608.jpg 4608w
        "
        sizes="(min-width: 1200px) 30vw, (min-width: 720x) 45vw, 95vw"
        alt="Kobieta z psem w lesie"
        title="Kobieta z psem w lesie"
      />`,
  },
];

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const servicesRef = collection(db, 'services');

const tosContent = document.querySelector('.tos__content');

getDocs(servicesRef).then(querySnapshot => {
  const input = querySnapshot.docs.map(doc => doc.data());
  tosContent.innerHTML = '';

  input.forEach((elem, index) => {
    const header = document.createElement('div');
    header.innerHTML = `<h3 class="tos__service-name">${elem.name}:</h3>`;

    const tos = document.createElement('p');
    tos.classList.add('service-tos');
    tos.innerHTML = elem.tos;

    // const image = document.createElement('div');
    // image.classList.add('tos__image_container');
    // const imageListHTML = imageList[index] ? imageList[index].html : '';
    // image.innerHTML = imageListHTML ? imageListHTML : '';

    tosContent.insertAdjacentElement('beforeend', header);
    tosContent.insertAdjacentElement('beforeend', tos);
    // tosContent.insertAdjacentElement('beforeend', image);
  });
});
