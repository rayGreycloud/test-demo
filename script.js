const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'puppies.com',
  'catpics.com',
];

const googleSearch = searchInput => {
  const matches = googleDatabase.filter(website =>
    website.includes(searchInput),
  );

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch('cat'));

module.exports = googleSearch;
