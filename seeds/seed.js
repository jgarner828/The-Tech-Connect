const sequelize = require('../config/connection');
const seedBlog = require('./blogData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true});

  await seedUser();

  console.log('Success: Uploaded User table')

  await seedBlog();

  console.log('Success: Uploaded Blog table')

  process.exit(0);
};

seedAll();