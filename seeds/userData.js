const { User } = require('../models');

const userData = [
    {
      name: 'Justin',
      email: 'justin@gmail.com',
      password: 'password12345',
    },
    {
      name: 'Sarah',
      email: 'Sarah@gmail.com',
      password: 'password12345',
    },
    {
      name: 'Al Pacino',
      email: 'BigAl@gmail.com',
      password: 'password12345',
    },
    {
      name: 'Batman',
      email: 'NotInaCave@gmail.com',
      password: 'password12345',
    }
  ];
  
  console.log(typeof userData);
  console.log(JSON.stringify(userData));
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;