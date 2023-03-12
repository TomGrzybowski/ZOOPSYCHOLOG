import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore/lite';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

const auth = getAuth();

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Handle successful login
      const user = userCredential.user;
      console.log(`User ${user.email} logged in successfully`);
      loginForm.classList.add('is-hidden');
    })
    .catch(error => {
      // Handle login error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error logging in: ${errorMessage} (${errorCode})`);
    });
});

// Get references to the DOM elements
const userInfoDiv = document.querySelector('.user-info');

const logoutBtn = document.getElementById('logout-btn');

// Check if a user is logged in
auth.onAuthStateChanged(user => {
  const box = document.querySelector('.editing');
  if (user) {
    // User is logged in, show the user info and logout button
    loginForm.classList.add('is-hidden');
    userInfoDiv.classList.remove('is-hidden');
    createEditingForm();
  } else {
    // User is logged out, hide the user info and logout button
    userInfoDiv.classList.add('is-hidden');
    loginForm.classList.remove('is-hidden');
    box.innerHTML = '';
  }
});

// Add an event listener to the logout button
logoutBtn.addEventListener('click', e => {
  e.preventDefault();

  signOut(auth)
    .then(() => {
      // Handle successful logout
      console.log('User logged out successfully');
    })
    .catch(error => {
      // Handle logout error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error logging out: ${errorMessage} (${errorCode})`);
    });
});

function createEditingForm() {
  const box = document.querySelector('.editing');
  box.innerHTML = `<form class="edit-form">
	<label for="mode">Wybierz tryb:</label>
	<select id="mode" name="mode">
		<option value="add-new">Nowa usługa</option>
		<option value="edit">Edytuj</option>
		<option value="remove">Usuń</option>
	</select>

	<div id="service-select" style="display: none;">
		<label for="service-name">Wybierz usługę:</label>
		<select id="service-name" name="service-name"></select>
	</div>

	<label for="nazwa-uslugi" class="nazwa-uslugi-label">Nazwa uslugi:</label>
	<input type="text" id="nazwa-uslugi" name="nazwa-uslugi">
	
	<label for="cena" class="cena-label">Cena:</label>
	<input type="number" id="cena" name="cena">
	
	<label for="opis" class="opis-label">Opis:</label>
	<textarea id="opis" name="opis"></textarea>
	
	<label for="regulamin" class="regulamin-label">Regulamin:</label>
	<textarea id="regulamin" name="regulamin"></textarea>
	
	<input type="submit" value="Submit" class="submit-button">
</form>`;

  const modeSelect = document.querySelector('#mode');
  const serviceSelect = document.querySelector('#service-select');
  const nazwaUslugiLabel = document.querySelector('.nazwa-uslugi-label');
  const nazwaUslugiInput = document.querySelector('#nazwa-uslugi');
  const mainForm = document.querySelector('.edit-form');
  const priceLabel = document.querySelector('.cena-label');
  const priceInput = document.querySelector('#cena');
  const opisLabel = document.querySelector('.opis-label');
  const opisInput = document.querySelector('#opis');
  const regulaminLabel = document.querySelector('.regulamin-label');
  const regulaminInput = document.querySelector('#regulamin');

  modeSelect.addEventListener('change', () => {
    if (modeSelect.value === 'edit') {
      serviceSelect.style.display = 'block';
      nazwaUslugiInput.style.display = 'none';
      nazwaUslugiLabel.style.display = 'none';

      priceLabel.style.display = 'block';
      priceInput.style.display = 'block';
      opisLabel.style.display = 'block';
      opisInput.style.display = 'block';
      regulaminLabel.style.display = 'block';
      regulaminInput.style.display = 'block';
      displayServiceNames();
      fillInInputs();
    } else if (modeSelect.value === 'add-new') {
      serviceSelect.style.display = 'none';
      nazwaUslugiInput.style.display = 'block';
      nazwaUslugiLabel.style.display = 'block';

      priceLabel.style.display = 'block';
      priceInput.style.display = 'block';
      opisLabel.style.display = 'block';
      opisInput.style.display = 'block';
      regulaminLabel.style.display = 'block';
      regulaminInput.style.display = 'block';
      mainForm.reset();
    } else if (modeSelect.value === 'remove') {
      serviceSelect.style.display = 'block';
      nazwaUslugiInput.style.display = 'none';
      nazwaUslugiLabel.style.display = 'none';

      priceLabel.style.display = 'none';
      priceInput.style.display = 'none';
      opisLabel.style.display = 'none';
      opisInput.style.display = 'none';
      regulaminLabel.style.display = 'none';
      regulaminInput.style.display = 'none';
      displayServiceNames();
    }
  });

  mainForm.addEventListener('submit', handleMainFormSubmit);

  async function handleMainFormSubmit(e) {
    e.preventDefault();

    const nameInput = document.querySelector('#nazwa-uslugi');
    const priceInput = document.querySelector('#cena');
    const descriptionInput = document.querySelector('#opis');
    const tosInput = document.querySelector('#regulamin');

    const name = nameInput.value.trim();
    const price = parseFloat(priceInput.value);
    const description = descriptionInput.value.replace(/\n/g, '<br>');
    const tos = tosInput.value.replace(/\n/g, '<br>');

    if (!price || !description || !tos) {
      Notify.failure('Wypełnij wszystkie pola formularza');
      return;
    }

    const data = {
      name,
      price,
      description,
      tos,
    };

    const mode = modeSelect.value;

    if (mode === 'add-new') {
      if (!name) {
        Notify.failure('Wypełnij wszystkie pola formularza');
        return;
      }

      const querySnapshot = await getDocs(
        query(collection(db, 'services'), where('name', '==', name))
      );
      if (!querySnapshot.empty) {
        Notify.failure('Usługa o podanej nazwie już istnieje');
        return;
      }
      await addDoc(servicesRef, data);
      // Clear the input fields after adding a new service
      mainForm.reset();
      Notify.success('Dodano nowa usługę');
    } else if (mode === 'edit') {
      const serviceName = document.querySelector('#service-name').value;

      const querySnapshot = await getDocs(
        query(collection(db, 'services'), where('name', '==', serviceName))
      );

      if (querySnapshot.docs.length > 0) {
        const serviceId = querySnapshot.docs[0].id;
        const dataToUpdate = {
          name: document.querySelector('#service-name').value,
          price: Number(document.querySelector('#cena').value),
          description: document
            .querySelector('#opis')
            .value.replace(/\n/g, '<br>'),
          tos: document
            .querySelector('#regulamin')
            .value.replace(/\n/g, '<br>'),
        };
        await updateDoc(doc(db, 'services', serviceId), dataToUpdate);

        mainForm.reset();
        Notify.success('Usługa zaktualizowana');
      } else {
        Notify.failure('Usługa nieznaleziona');
      }
    } else if (mode === 'remove') {
      const serviceName = document.querySelector('#service-name').value;

      // Confirm with the user before deleting the service
      const confirmed = confirm(
        `Czy jesteś pewna, że chcesz usunąć usługę ${serviceName}?`
      );

      if (confirmed) {
        // Query for the service based on the specified name
        const querySnapshot = await getDocs(
          query(collection(db, 'services'), where('name', '==', serviceName))
        );

        if (querySnapshot.docs.length > 0) {
          // Delete the service if it exists
          const serviceId = querySnapshot.docs[0].id;
          await deleteDoc(doc(db, 'services', serviceId));

          // Show a success message
          Notify.success(`Usunięto usługę  ${serviceName}`);
        } else {
          // Show an error message if the service does not exist
          Notify.failure('Nie znaleziono usługi');
        }
      }
    }
  }

  const serviceNameInput = document.querySelector('#service-name');

  serviceNameInput.addEventListener('change', fillInInputs);

  async function fillInInputs() {
    const serviceName = serviceNameInput.value;
    const querySnapshot = await getDocs(
      query(collection(db, 'services'), where('name', '==', serviceName))
    );

    if (querySnapshot.docs.length > 0) {
      const serviceData = querySnapshot.docs[0].data();

      document.querySelector('#nazwa-uslugi').value = serviceData.name;
      document.querySelector('#cena').value = serviceData.price;
      document.querySelector('#opis').value =
        serviceData.description.replaceAll('<br>', '\n');
      document.querySelector('#regulamin').value = serviceData.tos.replaceAll(
        '<br>',
        '\n'
      );
    } else {
      // Clear the input fields if no service is found
      document.querySelector('#nazwa-uslugi').value = '';
      document.querySelector('#cena').value = '';
      document.querySelector('#opis').value = '';
      document.querySelector('#regulamin').value = '';
    }
  }

  function displayServiceNames() {
    getDocs(servicesRef)
      .then(querySnapshot => {
        const serviceNames = querySnapshot.docs.map(doc => doc.data().name);

        const serviceSelect = document.querySelector('#service-name');
        serviceSelect.innerHTML = '';
        serviceNames.forEach(name => {
          const option = document.createElement('option');
          option.value = name;
          option.text = name;
          serviceSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.log('Error getting documents: ', error);
      });
  }
}
