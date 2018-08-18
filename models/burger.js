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
        orm.create("burgers", ["burger_name", "devoured"], [name, false], cb, function(res){
            cb(res);
        })
   
   
    },


    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      },
    
};

   
// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
