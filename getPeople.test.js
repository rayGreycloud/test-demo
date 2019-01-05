const fetch = require('node-fetch');

const { getPeoplePromise, getPeople } = require('./getPeople');

describe('getPeople', () => {
  it('should fetch correct number of records', async () => {
    expect.assertions(1);
    const data = await getPeople(fetch);
    expect(data.count).toEqual(87);
  });

  it('should return count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            count: 87,
            results: [0, 1, 2, 3, 4, 5],
          }),
      }),
    );

    expect.assertions(3);

    return getPeople(mockFetch).then(data => {
      expect(data.count).toEqual(87);
      expect(mockFetch.mock.calls.length).toEqual(1);
      expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
    });
  });
});

describe('getPeoplePromise', () => {
  it('should fetch people (test using done)', done => {
    // always use expect.assertions when testing async code
    expect.assertions(1);
    getPeoplePromise(fetch).then(data => {
      expect(data.count).toEqual(87);
      done();
    });
  });

  it('should fetch people (using return stmt)', () => {
    expect.assertions(2);
    // return promise - will wait for data
    return getPeoplePromise(fetch).then(data => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
});
