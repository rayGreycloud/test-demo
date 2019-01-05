const googleSearch = require('./script');

const dbMock = ['dogs.com', 'cheesepuff.com', 'disney.com', 'dogpictures.com'];

let searchTerm, results;
describe('googleSearch', () => {
  it('should return results including search term', () => {
    searchTerm = 'test';
    results = googleSearch(searchTerm, dbMock);
    expect(results.length).toBe(0);
    expect(results).toEqual([]);

    searchTerm = 'dog';
    results = googleSearch(searchTerm, dbMock);
    expect(results.length).toBe(2);
    expect(results).toContain('dogs.com');
  });

  it('should work with undefined and null input', () => {
    searchTerm = undefined;
    results = googleSearch(searchTerm, dbMock);
    expect(results).toEqual([]);

    searchTerm = null;
    results = googleSearch(searchTerm, dbMock);
    expect(results).toEqual([]);
  });

  it('should not return more than 3 matches', () => {
    searchTerm = '.com';
    results = googleSearch(searchTerm, dbMock);
    expect(results.length).toEqual(3);
  });
});
