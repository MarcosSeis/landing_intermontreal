import countapi from 'countapi-js';

const NAMESPACE = 'https://intermontrealdemanejo.com/';
const KEY = '3702d928-0abb-11ee-be56-0242ac120002';

const counter = document.querySelectorAll('span');

const getCount = async () => {
  try {
    const { value } = await countapi.get(NAMESPACE, KEY);
    setValue(value);
  } catch (error) {
    console.log(error);
  }
};

const incrementCount = async () => {
  try {
    const { value } = await countapi.hit(NAMESPACE, KEY);
    setValue(value);
  } catch (error) {
    console.log(error);
  }
};

const setValue = (num) => {
  const str = num.toString().padStart(6, '0');
  for (let index = 0; index < str.length; index++) {
    counter[index].innerHTML = str[index];
  }
};

if (localStorage.getItem('hasVisited') === null) {
  incrementCount()
    .then(() => {
      localStorage.setItem('hasVisited', 'true');
    })
    .catch((err) => console.log(err));
} else {
  getCount().catch((err) => console.log(err));
}
