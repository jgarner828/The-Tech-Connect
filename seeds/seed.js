


// TODO: NEED TO BUILD THIS SEED FILE CORRECTLY USING PROPER VARIABLES.


const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const seedFile = require('seedFile.json');
const seedFile2 = require('seedFile2.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
