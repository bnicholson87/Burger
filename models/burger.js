const orm = require("./orm.js")

const burger = {
    selectAll(cb) {
      orm.selectAll('burgers', (res) => cb(res));
    },
    
    insertOne(burgerObject, cb) {
      orm.insertOne('burgers', burgerObject, (res) => cb(res));
    },

    updateOne(updateArray, cb) {
      orm.updateOne('burgers', updateArray, (res) => cb(res));
    }
  };
  
  module.exports = burger;