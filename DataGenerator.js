/* eslint-disable no-shadow */
/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
const Mongoose = require('mongoose');
const db = require('./server/mongodb.js').review;

const words = 'Skizzle Sevit Defas Looplab Doggax Qerrassa Nalpure Shorogyt Zestpond Naperone Noxu Hexteria Eggmode Chucknology Bistup Sinpad Reiltas Steeplump Kizerain Spusious Lotadilo Swooflia Bronea Hawkloon Chevesic Skaxis Lulerain Nekmunnit Crestboot Unpossible Foxclore Vasagle Stepjump Gleblu Castrealm Luezoid Chesture Feandra Boaclick Yammoe Mofoblitz Xanpon Singlewave Roplixoo Losenoid Loodon Rowlow Claster Pepelexa Ploosnar Wazzasoft Pruvia Tomash Bumola Sorson Roinad Luwest Digisol Gorealm Unelind Cazoova Johackle Sooprno Modgone Chillpal Olielle Burder Safome Bumooxa Grodsaar Swopom Soostev Creahoof Aberidus Sasaroo Viottis Scitenoa Drirathiel Trelod Jiofrax Chacaka Blewrath Underdoug Oeiwlax Bocilile Boxium Sophile Diddly Foxlink Hoophorn Joorflea Yetaland Valerine Sestoo Frosac Woimeth Jerohald Miozzix Lotadilo Swooflia Bronea Hawkloon Chevesic Skaxis Lulerain Nekmunnit Crestboot Unpossible Foxclore Vasagle Stepjump Gleblu Castrealm Luezoid Chesture Feandra Boaclick Yammoe Mofoblitz Xanpon Singlewave Roplixoo Losenoid Loodon Rowlow Claster Pepelexa Sertave Dropellet Jeebus Noodile Drearien Kaloolon Norrisology Ybuwyn Fuffapster Jobox Creabird Astauand Mizuxe Slabdrill Zestybus Ferirama Tuttadit Printure Geosyog Plakill Shorogyt Zestpond Naperone Noxu Hexteria Eggmode Chucknology Bistup Sinpad Reiltas Steeplump Kizerain Spusious Lotadilo Swooflia Bronea Hawkloon Chevesic Skaxis Lulerain Nekmunnit Crestboot Unpossible Foxclore Vasagle Stepjump Gleblu Castrealm Luezoid Chesture Feandra Boaclick Yammoe Mofoblitz Xanpon Singlewave Roplixoo Losenoid Loodon Rowlow Claster Pepelexa Sertave Dropellet Jeebus Noodile Drearien Kaloolon Norrisology Dohi Plifal Groopster Drywest Fapster Chaintwist Sislaf Glozzom Zapster Pricenano Pentwist Trealop Shizzo Dododox Weepeggle Bookbox Duzafizz Fliondeso Ahoy-wut Miresa Looncan Cheilith Kiraric Parede Besloor Wavefire Glomtom Aferraron Tupacase Didiza Chershoee Onama Biasdo Boxscape Seiliu Chorenn Wetwest Novaly Werradith Hoppler Eraow Acaer Yoffa Jeren Tupress Animepolis Noelind Ekcle Hendassa Shizzo Dododox Weepeggle Bookbox Duzafizz Fliondeso Ahoy-wut Miresa Looncan Cheilith Kiraric Parede Besloor Wavefire Glomtom Aferraron Tupacase Didiza Chershoee Onama Biasdo Boxscape Seiliu Chorenn Wetwest Novaly Werradith Hoppler Eraow Acaer Yoffa Jeren Tupress Animepolis Noelind Ekcle Hendassa Glaretram';

const generateData = function () {
  const data = words.split(' ');
  const returnData = {};
  let string = '';
  // Generating random string for title
  for (let i = 0; i < Math.floor(Math.random() * 10) + 5; i++) {
    string += `${data[Math.floor(Math.random() * data.length)]} `;
  }
  string = string.slice(0, string.length - 1);
  returnData.title = string;
  returnData.description = '';
  // Generating random string for description;
  for (let i = 0; i < (Math.floor(Math.random() * 80) + 10); i++) {
    returnData.description += `${data[Math.floor(Math.random() * data.length)]} `;
  }
  returnData.description = returnData.description.slice(0, returnData.description.length - 1);
  // Rating
  returnData.rating = Math.floor((Math.random() * 5) + 1);
  // Engagement
  returnData.engagement = Math.floor((Math.random() * 5) + 1);
  // Grades used with
  const grades = ['1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'];
  returnData.grade = [];
  for (let i = 0; i < Math.floor(Math.random() * 3); i += 1) {
    returnData.grade.push(grades[Math.floor(Math.random() * 5)]);
  }
  // Standards Alignment
  const standards = [['CCSS', 'RI. 6.2'], ['CCSS', '3.NF.A.1'], ['TKO', '12.4f']];
  returnData.standards = [];
  for (let i = 0; i < Math.floor(Math.random() * 3); i += 1) {
    returnData.standards.push({
      standard: standards[Math.floor(Math.random() * 3)].join(' '),
      alignment: Math.floor(Math.random() * 5) + 1,
    });
  }
  // Helpful
  returnData.helpful = Math.floor(Math.random() * 10);
  returnData.user = `${data[Math.floor(Math.random() * data.length)]} ${data[Math.floor(Math.random() * data.length)]}`;
  returnData.productId = Math.floor(Math.random() * 100) + 1;
  return returnData;
};

// Creates n amounts of data
const seed = function (n) {
  const returnArray = [];
  for (let i = 0; i < n; i++) {
    // eslint-disable-next-line no-undef
    returnArray.push(generateData());
  }
  return returnArray;
};
// Generate 100 pieces of data
const values = seed(100);
db.collection.drop({});
values.forEach((item) => {
  const value = new db(item);
  value.save((err, review) => {
    if (err) {
      console.log(err);
    } else {
      console.log(review);
    }
  });
});

setTimeout(() => {
  Mongoose.connection.close();
}, 3000);
// connection.end();
