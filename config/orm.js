const connection = require("../config/connection.js");


function printQuestionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}
//************************************************************************************************ */
const orm = {
    // Query for all rows 
    selectAll: function (tableName, callback) {
        let queryStr = "SELECT * FROM " + tableName;
        
        connection.query(queryStr, (err, result) => {
            if (err) throw err;
            callback(result);   
        });

    },
    // Insert One row
    insertOne: function (tableName,cols,values,callback) {
            let queryStr = "INSERT INTO " + tableName;
            queryStr += " (" + cols.toString() + ")";
            queryStr += " VALUES (" + printQuestionMarks(values.length) + ")";

            connection.query(queryStr,values,(err,result)=>{
                if(err) throw err;
                callback(result);
            });
    },
    // Update One row 
    updateOne: function(tableName, objCol, condition, callback){
            let queryStr = "UPDATE " + tableName;
            queryStr += " SET " + objToSql(objCol);
            queryStr += " WHERE " + condition;

            connection.query(queryStr,(err,result) => {
                if (err) throw err;
                callback(result);
            });
    },

    deleteOne: function(tableName,col,value, callback){
            let queryStr = "DELETE FROM ?? WHERE ?? = ?";
            connection.query(queryStr,[tableName, col, value],(err,result)=>{
                if (err) throw err;
                callback(result);

            })
    }
}


module.exports = orm;
