const connection = require("./connection.js")

const orm = {
    selectAll: function (tableName, cb) {
        connection.query(`SELECT * FROM ${tableName}`, (err, res) => {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (tableName, burgerOrder, cb) {
        connection.query(
            `INSERT INTO ${tableName} SET ?`,
            burgerOrder,
            (err, res) => {
                if (err) throw err;
                console.log(`${res.affectedRows} Order received!\n`);
                cb(res);
            })
    },
    updateOne: function (tableName, updateArray, cb) {
        const query = connection.query(
            `UPDATE ${tableName} SET ? WHERE ?`,
            updateArray,
            (err, res) => {
              if (err) throw err;
              console.log(`${res.affectedRows} Order updated!\n`);
              cb(res);
            })
    }
}

module.exports = orm