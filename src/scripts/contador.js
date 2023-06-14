const COUNT_URL = "https://api.countapi.xyz";
const NAMESPACE = "https://intermontrealdemanejo.com/";
const KEY = "3702d928-0abb-11ee-be56-0242ac120002";

const counter = document.querySelectorAll('span');

const getCount = () => {
  const script = document.createElement('script');
  script.src = `${COUNT_URL}/get/${NAMESPACE}/${KEY}?callback=handleResponse`;
  document.body.appendChild(script);
};

const incrementCount = () => {
  const script = document.createElement('script');
  script.src = `${COUNT_URL}/hit/${NAMESPACE}/${KEY}?callback=handleResponse`;
  document.body.appendChild(script);
};

const handleResponse = (data) => {
  setValue(data.value);
};

const setValue = (num) => {
  var str = num.toString().padStart(6, "0");
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    counter[index].innerHTML = element;
  }
};

if (localStorage.getItem("hasVisited") == null) {
  incrementCount();
  localStorage.setItem("hasVisited", "true");
} else {
  getCount();
}
