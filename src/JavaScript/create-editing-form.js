// import { displayServiceNames } from './handle-edititing-form';

// export function createEditingForm() {
//   const box = document.querySelector('.editing');
//   box.innerHTML = `<form class="edit-form">
// 	<label for="mode">Choose mode:</label>
// 	<select id="mode" name="mode">
// 		<option value="add-new">Add new</option>
// 		<option value="edit">Edit</option>
// 	</select>

// 	<div id="service-select" style="display: none;">
// 		<label for="service-name">Select service:</label>
// 		<select id="service-name" name="service-name"></select>
// 	</div>

// 	<label for="nazwa-uslugi" class="nazwa-uslugi-label">Nazwa uslugi:</label>
// 	<input type="text" id="nazwa-uslugi" name="nazwa-uslugi">

// 	<label for="cena">Cena:</label>
// 	<input type="number" id="cena" name="cena">

// 	<label for="opis">Opis:</label>
// 	<textarea id="opis" name="opis"></textarea>

// 	<label for="regulamin">Regulamin:</label>
// 	<textarea id="regulamin" name="regulamin"></textarea>

// 	<input type="submit" value="Submit" class="submit-button">
// </form>`;

//   const modeSelect = document.querySelector('#mode');
//   const serviceSelect = document.querySelector('#service-select');
//   const nazwaUslugiLabel = document.querySelector('.nazwa-uslugi-label');

//   const nazwaUslugiInput = document.querySelector('#nazwa-uslugi');

//   modeSelect.addEventListener('change', () => {
//     if (modeSelect.value === 'edit') {
//       serviceSelect.style.display = 'block';
//       nazwaUslugiInput.style.display = 'none';
//       nazwaUslugiLabel.style.display = 'none';
//       displayServiceNames();
//     } else {
//       serviceSelect.style.display = 'none';
//       nazwaUslugiInput.style.display = 'block';
//       nazwaUslugiLabel.style.display = 'block';
//     }
//   });
// }
