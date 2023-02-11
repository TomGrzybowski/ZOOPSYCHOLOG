export function generateUslugi() {
  const main = document.querySelector('.main');
  main.innerHTML = '';

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');
  main.insertAdjacentElement('beforeend', cardContainer);

  const content = [
    {
      service: 'Konsultacje behawioralne (wizyta w domu + spacer)',
      price: '200zł+dojazd do klienta',
      time: '1h',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aspernatur natus error ducimus perferendis eligendi nam atque, consequuntur omnis totam nobis facere, voluptatibus magni delectus perspiciatis fugiat cupiditate suscipit doloribus dolore laboriosam maiores quo tempore. Quisquam vel eum fugit atque nobis nemo id corrupti? Numquam deserunt laboriosam officia voluptate in.',
    },
    {
      service: 'Spacer równoległy',
      price: '40zł',
      time: '1h',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aspernatur natus error ducimus perferendis eligendi nam atque, consequuntur omnis totam nobis facere, voluptatibus magni delectus perspiciatis fugiat cupiditate suscipit doloribus dolore laboriosam maiores quo tempore. Quisquam vel eum fugit atque nobis nemo id corrupti? Numquam deserunt laboriosam officia voluptate in.',
    },
    {
      service: 'Tropienie',
      price: '40zł',
      time: '1h',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aspernatur natus error ducimus perferendis eligendi nam atque, consequuntur omnis totam nobis facere, voluptatibus magni delectus perspiciatis fugiat cupiditate suscipit doloribus dolore laboriosam maiores quo tempore. Quisquam vel eum fugit atque nobis nemo id corrupti? Numquam deserunt laboriosam officia voluptate in.',
    },
    {
      service: 'Salka ekslopacji',
      price: '80zł',
      time: '1h',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aspernatur natus error ducimus perferendis eligendi nam atque, consequuntur omnis totam nobis facere, voluptatibus magni delectus perspiciatis fugiat cupiditate suscipit doloribus dolore laboriosam maiores quo tempore. Quisquam vel eum fugit atque nobis nemo id corrupti? Numquam deserunt laboriosam officia voluptate in.',
    },
    {
      service: 'Szkolenia indywidualne',
      price: '100zł',
      time: '1h',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aspernatur natus error ducimus perferendis eligendi nam atque, consequuntur omnis totam nobis facere, voluptatibus magni delectus perspiciatis fugiat cupiditate suscipit doloribus dolore laboriosam maiores quo tempore. Quisquam vel eum fugit atque nobis nemo id corrupti? Numquam deserunt laboriosam officia voluptate in.',
    },
    {
      service: 'Studio noseworku',
      price: '50zł',
      time: '1h',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aspernatur natus error ducimus perferendis eligendi nam atque, consequuntur omnis totam nobis facere, voluptatibus magni delectus perspiciatis fugiat cupiditate suscipit doloribus dolore laboriosam maiores quo tempore. Quisquam vel eum fugit atque nobis nemo id corrupti? Numquam deserunt laboriosam officia voluptate in.',
    },
    {
      service: 'Analiza psiej komunikacji',
      price: '60zł',
      time: '1h',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aspernatur natus error ducimus perferendis eligendi nam atque, consequuntur omnis totam nobis facere, voluptatibus magni delectus perspiciatis fugiat cupiditate suscipit doloribus dolore laboriosam maiores quo tempore. Quisquam vel eum fugit atque nobis nemo id corrupti? Numquam deserunt laboriosam officia voluptate in.',
    },
    {
      service: 'Petsitting',
      price: '100zł',
      time: '1h',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aspernatur natus error ducimus perferendis eligendi nam atque, consequuntur omnis totam nobis facere, voluptatibus magni delectus perspiciatis fugiat cupiditate suscipit doloribus dolore laboriosam maiores quo tempore. Quisquam vel eum fugit atque nobis nemo id corrupti? Numquam deserunt laboriosam officia voluptate in.',
    },
  ];

  for (let i = 0; i < content.length; i++) {
    const card = document.createElement('section');
    card.classList.add('card');

    const serviceName = document.createElement('h2');
    serviceName.classList.add('service-name');
    serviceName.textContent = content[i].service;

    const price = document.createElement('div');
    price.classList.add('service-price');
    price.textContent = content[i].price;

    const description = document.createElement('p');
    description.classList.add('service-description');
    description.textContent = content[i].description;

    const time = document.createElement('div');
    time.classList.add('service-time');
    time.textContent = content[i].time;

    card.insertAdjacentElement('beforeend', serviceName);
    card.insertAdjacentElement('beforeend', price);
    card.insertAdjacentElement('beforeend', time);
    card.insertAdjacentElement('beforeend', description);

    cardContainer.insertAdjacentElement('beforeend', card);
  }
}
