const mongoose = require('mongoose');
const db = require('./index.js');
const faker = require('faker');
const restaurants = require('./restaurants.js');
const fs = require('fs');

var idNum = 0;

for (let i = 0; i < 5000; i++) {
  var lineArr = [];
  for (let j = 0; j < 2000; j++) {
    idNum++;
    let line = {
      id: idNum,
      name: faker.company.companyName(),
      neighborhood: faker.address.streetName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      postalCode: faker.address.zipCode(),
      latitude: Math.floor((Math.random() * 15) + 35),
      longitude: Math.floor((Math.random() * 40) - 120),
      stars: Math.floor(Math.random() * Math.floor(6)),
      reviewCount: Math.floor(Math.random() * Math.floor(1000)),
      categories: [faker.commerce.productAdjective(), faker.commerce.product(), faker.commerce.productName()],
      phone: faker.phone.phoneNumber(),
    };
    lineArr.push(JSON.stringify(line));
  }
  if (idNum % 10000 === 0) { console.log(idNum); }
  fs.appendFileSync('./summaries.json', lineArr.join('\n'));
}



