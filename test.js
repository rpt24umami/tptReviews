import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import regeneratorRuntime from "regenerator-runtime";

import React from 'react';

import {App} from './src/index';
import Review from './src/review';

const axios = require('axios');
const { TestScheduler } = require('jest');
const request = require('supertest');

const app = require('./server/app');

Enzyme.configure({ adapter: new Adapter() });

function xit() {

}

function xdescribe() {

}

describe('Server Testing', () => {
  test('It should receive an object of reviews from the GET', (done) => {
    request(app)
      .get('/1/reviews')
      .then((response) => {
        expect(typeof response.body).toBe('object');
        expect(response.body.reviews[0].productId).not.toBe(undefined);
        done();
      });
  });
  test('It should receive an object with count of ratings divided by star, average rating, count by grade', (done) => {
    request(app)
      .get('/1/ratings')
      .then((response) => {
        expect(typeof response.body).toBe('object');
        for (let i = 0; i < response.body.length; i++) {
          expect(response.body[i]).not.toBe(undefined);
        }
        done();
      });
  });
});
const testData =[ {"grade":["3rd Grade","5th Grade"],"standards":[],"_id":"5fb5f7ea5410163e9397227f","title":"Chorenn Mizuxe Animepolis Xanpon Pruvia Unpossible Hoppler Pentwist Dododox","description":"Hawkloon Chershoee Mofoblitz Safome Unpossible Chevesic Plifal Losenoid Onama Nalpure Lotadilo Tupress Burder Kiraric","rating":5,"helpful":15,"user":"Hendassa Skaxis","productId":1,"__v":0},{"grade":["2nd Grade"],"standards":[{"standard":"CCSS 3.NF.A.1","alignment":1}],"_id":"5fb5f7ea5410163e93972284","title":"Werradith Sislaf Yammoe Pruvia Looncan Unpossible Glaretram Luwest Roplixoo","description":"Shorogyt Drearien Hoppler Wetwest Swooflia Nalpure Losenoid Tupress Acaer Roplixoo Lotadilo Bronea Pepelexa Jerohald Hawkloon Hawkloon Yetaland Miozzix Qerrassa Wavefire Kaloolon Norrisology Aferraron Bistup","rating":3,"helpful":13,"user":"Crestboot Bocilile","productId":1,"__v":0},{"grade":[],"standards":[{"standard":"CCSS RI. 6.2","alignment":3},{"standard":"CCSS RI. 6.2","alignment":1}],"_id":"5fb5f7ea5410163e93972289","title":"Nekmunnit Boxium Bumola Swooflia Valerine Sevit Bumooxa","description":"Wetwest Yammoe Oeiwlax Jeren Ahoy-wut Kaloolon Loodon Lotadilo Boaclick Acaer Drearien Roplixoo Bronea Skaxis Foxclore Besloor Sinpad Kiraric Wavefire Didiza Nekmunnit Acaer Hoppler Drirathiel Dropellet Jobox Woimeth Claster","rating":1,"helpful":0,"user":"Mizuxe Wetwest","productId":1,"__v":0},{"grade":[],"standards":[{"standard":"TKO 12.4f","alignment":1}],"_id":"5fb5f7ea5410163e9397228e","title":"Looplab Yammoe Norrisology Swooflia Biasdo Sestoo Norrisology Burder","description":"Feandra Lotadilo Unpossible Lulerain Ybuwyn Unelind Chevesic Groopster Pricenano Claster Skaxis Ahoy-wut Zestybus Geosyog Wazzasoft","rating":3,"helpful":3,"user":"Cazoova Dohi","productId":1,"__v":0},{"grade":["5th Grade"],"standards":[],"_id":"5fb5f7ea5410163e93972293","title":"Cheilith Zapster Soostev Besloor Diddly Jiofrax Luezoid Qerrassa Johackle","description":"Claster Jeebus Oeiwlax Sevit Werradith Eraow Blewrath Tupress Tupacase Biasdo Vasagle Digisol Norrisology Luwest Pentwist Yetaland Stepjump Luwest Bookbox Boxscape Boxium Swooflia Hoophorn Pepelexa Hendassa Vasagle Eggmode Creabird","rating":5,"helpful":9,"user":"Rowlow Castrealm","productId":1,"__v":0},{"grade":["1st Grade","4th Grade"],"standards":[{"standard":"TKO 12.4f","alignment":5}],"_id":"5fb5f7ea5410163e93972298","title":"Boxscape Bistup Gleblu Ploosnar Glomtom Jerohald Drearien Pepelexa","description":"Glomtom Cheilith Astauand Norrisology Jeebus Tupacase Loodon Seiliu Roplixoo Aberidus Drearien Skaxis Dropellet Zestpond Onama Grodsaar Boaclick","rating":5,"helpful":9,"user":"Animepolis Crestboot","productId":1,"__v":0},{"grade":["3rd Grade","1st Grade"],"standards":[],"_id":"5fb5f7ea5410163e9397229d","title":"Singlewave Foxclore Jeren Singlewave Sorson Skizzle Novaly Hexteria","description":"Looplab Mofoblitz Boxium Noxu Spusious Stepjump Lulerain Singlewave Shizzo Feandra Chorenn Singlewave Bronea Biasdo Drirathiel Tupacase Pricenano Ahoy-wut Yetaland Chevesic Eraow Hoppler Ahoy-wut Wetwest","rating":4,"helpful":3,"user":"Dododox Hoppler","productId":1,"__v":0},{"grade":[],"standards":[{"standard":"TKO 12.4f","alignment":2},{"standard":"CCSS RI. 6.2","alignment":1}],"_id":"5fb5f7ea5410163e939722a2","title":"Chesture Ekcle Tupress Ferirama Boaclick Kizerain Xanpon Pepelexa Roinad Kaloolon Wavefire","description":"Chesture Hexteria Besloor Hawkloon Defas Bronea Hexteria Sestoo Pepelexa Xanpon Nalpure Steeplump Ybuwyn Shorogyt Noxu Frosac Stepjump Seiliu Hawkloon Norrisology Wetwest Foxlink","rating":5,"helpful":8,"user":"Yammoe Chevesic","productId":1,"__v":0},{"grade":["1st Grade"],"standards":[{"standard":"TKO 12.4f","alignment":4}],"_id":"5fb5f7ea5410163e939722a7","title":"Werradith Bronea Shorogyt Besloor Fliondeso Vasagle","description":"Chorenn Loodon Sophile Rowlow Swooflia Nalpure Onama Feandra Loodon Jiofrax Looncan Sorson Johackle Luezoid","rating":5,"helpful":5,"user":"Modgone Crestboot","productId":1,"__v":0},{"grade":["4th Grade","1st Grade"],"standards":[{"standard":"CCSS RI. 6.2","alignment":4}],"_id":"5fb5f7ea5410163e939722ac","title":"Acaer Chorenn Seiliu Chershoee Swopom","description":"Mofoblitz Trealop Werradith Acaer Ahoy-wut Stepjump Tupacase Luezoid Hawkloon Lulerain Spusious Chesture Tomash Fliondeso","rating":3,"helpful":2,"user":"Hoppler Frosac","productId":1,"__v":0},{"grade":[],"standards":[{"standard":"TKO 12.4f","alignment":4},{"standard":"CCSS RI. 6.2","alignment":5}],"_id":"5fb5f7eb5410163e939722b1","title":"Besloor Weepeggle Chillpal Parede Sinpad Lulerain Luezoid","description":"Noodile Boaclick Sophile Chesture Sasaroo Bookbox Lulerain Bistup Glozzom Animepolis Aferraron Duzafizz Oeiwlax Zestpond Looncan Noodile Slabdrill Parede Yammoe Hawkloon","rating":1,"helpful":2,"user":"Hendassa Weepeggle","productId":1,"__v":0},{"grade":[],"standards":[{"standard":"TKO 12.4f","alignment":1}],"_id":"5fb5f7eb5410163e939722b6","title":"Glomtom Plifal Skaxis Jerohald Steeplump Bookbox Gleblu Drywest Norrisology Pricenano","description":"Astauand Losenoid Stepjump Mofoblitz Fuffapster Chesture Sertave Cheilith Chershoee Stepjump Novaly Blewrath Chesture Tupacase Eggmode Chillpal Ferirama Kaloolon Gorealm Castrealm Tomash Ploosnar Crestboot Valerine","rating":2,"helpful":6,"user":"Duzafizz Mofoblitz","productId":1,"__v":0},{"grade":[],"standards":[{"standard":"CCSS 3.NF.A.1","alignment":4},{"standard":"TKO 12.4f","alignment":4}],"_id":"5fb5f7eb5410163e939722bb","title":"Lotadilo Burder Sinpad Losenoid Viottis Mofoblitz Nekmunnit","description":"Mofoblitz Dropellet Ploosnar Yetaland Chevesic Chesture Kaloolon Cheilith Besloor Jeebus Printure Swooflia Fapster Chaintwist Gorealm Looplab Slabdrill Foxclore Shizzo Roplixoo Vasagle Castrealm Noodile Hendassa Castrealm Bocilile Crestboot Foxclore Pepelexa Chorenn","rating":4,"helpful":9,"user":"Astauand Wetwest","productId":1,"__v":0},{"grade":[],"standards":[],"_id":"5fb5f7eb5410163e939722c0","title":"Roinad Chucknology Animepolis Lotadilo Duzafizz Zestpond","description":"Skaxis Shorogyt Skaxis Bronea Glomtom Sertave Pepelexa Crestboot Norrisology Drearien Naperone Gleblu Steeplump Sorson Chevesic Defas Loodon Noelind Lulerain Creabird Chucknology Bookbox Boxium Ekcle Glomtom","rating":1,"helpful":4,"user":"Lulerain Boaclick","productId":1,"__v":0},{"grade":["3rd Grade"],"standards":[{"standard":"CCSS 3.NF.A.1","alignment":4}],"_id":"5fb5f7eb5410163e939722c5","title":"Bumooxa Chacaka Bookbox Loodon Aferraron Losenoid Sophile Chucknology Tuttadit Kizerain Frosac Loodon","description":"Soostev Rowlow Chevesic Crestboot Crestboot Swopom Nekmunnit Chorenn Nekmunnit Wavefire Sinpad","rating":3,"helpful":9,"user":"Vasagle Wazzasoft","productId":1,"__v":0},{"grade":["1st Grade","3rd Grade"],"standards":[{"standard":"CCSS RI. 6.2","alignment":4}],"_id":"5fb5f7eb5410163e939722ca","title":"Sevit Fliondeso Gleblu Gleblu Creahoof Qerrassa Diddly Luezoid","description":"Aferraron Looncan Grodsaar Yetaland Dododox Swooflia Eggmode Pepelexa Kiraric Spusious Skizzle Lotadilo Defas Miozzix Foxclore Hoppler Sertave Chevesic Jeebus Chevesic Didiza Pepelexa Sertave Shizzo","rating":1,"helpful":8,"user":"Besloor Printure","productId":1,"__v":0},{"grade":["5th Grade"],"standards":[{"standard":"TKO 12.4f","alignment":1}],"_id":"5fb5f7eb5410163e939722cf","title":"Duzafizz Roplixoo Mizuxe Cazoova Ploosnar Chaintwist Werradith Eggmode Gleblu","description":"Rowlow Jeebus Pepelexa Crestboot Ahoy-wut Nekmunnit Glomtom Sasaroo Kizerain Swopom Pepelexa Jiofrax Skizzle Miozzix Fuffapster Noelind Jeren Hawkloon Steeplump Hawkloon Tupacase Mofoblitz","rating":2,"helpful":8,"user":"Burder Aferraron","productId":1,"__v":0},{"grade":["5th Grade"],"standards":[],"_id":"5fb5f7eb5410163e939722d4","title":"Onama Lotadilo Stepjump Xanpon Pepelexa Lulerain Fuffapster Unpossible Wetwest","description":"Parede Bookbox Ekcle Lotadilo Pepelexa Didiza Frosac Biasdo Sislaf Glozzom Sooprno Chevesic Novaly Yammoe Foxclore Hendassa Noxu","rating":2,"helpful":8,"user":"Castrealm Animepolis","productId":1,"__v":0},{"grade":[],"standards":[{"standard":"CCSS RI. 6.2","alignment":3}],"_id":"5fb5f7eb5410163e939722d9","title":"Gorealm Sestoo Rowlow Jerohald Animepolis Tupress","description":"Singlewave Looncan Hexteria Ekcle Eggmode Chevesic Yoffa Spusious Skizzle Skaxis Dohi Kizerain Scitenoa Crestboot Pepelexa Wavefire Weepeggle Viottis Crestboot Shorogyt Bronea Ahoy-wut","rating":1,"helpful":3,"user":"Duzafizz Cheilith","productId":1,"__v":0},{"grade":["4th Grade","4th Grade"],"standards":[{"standard":"TKO 12.4f","alignment":4},{"standard":"CCSS 3.NF.A.1","alignment":3}],"_id":"5fb5f7ea5410163e9397227e","title":"Zestybus Swooflia Swooflia Scitenoa Zestpond Looncan Defas","description":"Dropellet Swooflia Cazoova Looncan Dohi Parede Jiofrax Ybuwyn Jeren Tomash Jeren Seiliu Bookbox Drearien Trelod Kiraric Cazoova Tuttadit Kizerain","rating":5,"helpful":8,"user":"Ekcle Tupacase","productId":1,"__v":0}];

describe('</Index>', () => {
  it('renders 20 <Review /> components', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      reviews: testData
    });
    expect(wrapper.find(Review)).toHaveLength(20);
  });
});

