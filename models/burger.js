// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

//Code that will call the ORM functions using burger specific input for the ORM.
let burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    //The variables cols and vals are arrays.
    create: function (name, cb) {
        orm.create("burgers", ["burger_name", "devoured"], [name, false], cb); 
            cb(res);
   
    },

    update: function (id, cb) {
       let condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

   
// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
