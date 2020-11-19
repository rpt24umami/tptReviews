const axios = require('axios');
const { TestScheduler } = require('jest');
const request = require("supertest");

const app = require('./server/app');



function xit() {

}

describe('Server Testing', () => {
  test('It should get a response from the GET', (done) => {
    request(app)
      .get('/1/reviews')
      .then(response => {
        expect(typeof response).toBe('object');
        done();
      });
  });
});

// const fetchData = async () => {
//   const url = '/1/reviews/';

//   return await axios.get(url);
// };

// describe('fetchData', () => {
//   xit('fetches data from the API successfully', async () => {
//     const data = {};
//     axios.get.mockImplementationOnce(() => Promise.resolve('123456'));

//     await expect(fetchData()).resolves.toEqual('123456');
//   });

//   it('Fetches Axios Get', async () => {
//     await axios.get('http://localhost:3001/1/reviews')
//       .then((results) => {
//         console.log(results);
//       });
//   });
// });

// describe('fetchData', () => {
//   xit('fetches data from the API successfully', () => {
//     return expect(axios.get('http://localhost:3001/1/reviews')).resolves.toEqual('22121');
//   });
// });
