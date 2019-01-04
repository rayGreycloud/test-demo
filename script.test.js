const googleSearch = require('./script');

const dbMock = ['dogs.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

it('should return results including search term', () => {
  const searchTerm = 'dog';
  const results = googleSearch(searchTerm, dbMock);
  expect(results.length).toBe(2);
  expect(results).toContain('dogs.com');
});
