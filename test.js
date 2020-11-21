const axios = require('axios');
const { TestScheduler } = require('jest');
const request = require("supertest");

const app = require('./server/app');

function xit() {

}

function xdescribe() {

}

describe('Server Testing', () => {
  test('It should receive an object of reviews from the GET', (done) => {
    request(app)
      .get('/1/reviews')
      .then(response => {
        expect(typeof response.body).toBe('object');
        console.log(response.body);
        expect(response.body.reviews[0].productId).not.toBe(undefined);
        done();
      });
  });
  test('It should receive an object with count of ratings divided by star, average rating, count by grade', (done) => {
    request(app)
      .get('/1/ratings')
      .then(response => {
        expect(typeof response.body).toBe('object');
        for (let i = 0; i < response.body.length; i++) {
          expect(response.body[i]).not.toBe(undefined);
        }
        done();
      });
  });
});