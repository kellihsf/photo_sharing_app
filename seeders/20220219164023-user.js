"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Izzie",
          lastName: "Stone",
          email: "izzie@dogs.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Marley",
          lastName: "Williams",
          email: "marley@dogs.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
