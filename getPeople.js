const fetch = require('node-fetch');

// promise version
const getPeoplePromise = fetch =>
  fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return {
        count: data.count,
        results: data.results,
      };
    });

// async-await
const getPeople = async fetch => {
  const response = await fetch('https://swapi.co/api/people');

  const data = await response.json();
  console.log(data);

  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = { getPeoplePromise, getPeople };
