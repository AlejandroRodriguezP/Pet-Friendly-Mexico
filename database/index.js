const mysql = require('mysql2');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);


const getVetProfiles = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM servicesProfiles', (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    })
  })
};


const getPetProfiles = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM petProfiles', (err, data) => {
      if(err){
        return reject(err);
      }
      return resolve(data);
    })
  })
};

const postPetProfile = function(petName, age, breed, vaccines, dewormed, smallDescription) {
 return new Promise((resolve, reject) => {
   connection.query('INSERT INTO petProfiles(petName, age, breed, vaccines, dewormed, smallDescription) VALUES (?, ?, ?, ?, ?, ?)',
   [petName, age, breed, vaccines, dewormed, smallDescription], (err, data) => {
     if(err) {
       return reject(err);
     }
     return resolve(data);
   })
 })
};


const getPetProfile = function() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM petProfiles'), (err, data) => {
      if(err){
        return reject (err);
      }
      return resolve(data);
    }
  })
};


const postServicesProfiles = function(firstName, lastName, phoneNumber, streetAddress, city, state, zipCode, businessName, businessType) {
 return new Promise((resolove, reject) => {
   connection.query('INSERT INTO servicesProfiles(firstName, lastName, phoneNumber, streetAddress, city, state, zipCode, businessName, businessType) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
     [firstName, lastName, phoneNumber, streetAddress, city, state, zipCode, businessName, businessType], (err, data) => {
       if(err) {
         return reject(err);
       }
       return resolve(data);
     })
  })
};

const postPetProfile = function(petName, age, breed, vaccines, dewormed, smallDescription) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO petProfiles(petName, age, breed, vaccines, dewormed, smallDescription) VALUES (?, ?, ?, ?, ?, ?)',
    [petName, age, breed, vaccines, dewormed, smallDescription], (err, data) => {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    })
  })
};



const postPetProfile = function(petName, age, breed, vaccines, dewormed, smallDescription) {
 return new Promise((resolve, reject) => {
   connection.query('INSERT INTO petProfiles(petName, age, breed, vaccines, dewormed, smallDescription) VALUES(?, ?, ?, ?, ?, ?)',
     [petName, age, breed, vaccines, dewormed, smallDescription], (err, data) => {
       if(err) {
         return reject(err);
       }
       return resolve(data);
     })
  })
};

module.exports = {
  getVetProfiles,
  getPetProfile,
  postServicesProfiles,
  postPetProfile
};
