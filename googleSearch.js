const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'puppies.com',
  'catpics.com',
];

const googleSearch = (searchInput, database) => {
  const matches = database.filter(website => website.includes(searchInput));

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;
