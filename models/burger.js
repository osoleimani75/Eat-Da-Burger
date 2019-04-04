const orm = require("../config/orm");
const burger ={

    selectAll: function (callback) {
        orm.selectAll('burgers',(result) => {
            callback(result);
        });
    },

    insertOne: function(cols,value,callback) {
        orm.insertOne('burgers', cols, value, (result) =>{
            callback(result);
        });
    },

    updateOne: function(objCol, condition, callback){
        orm.updateOne('burgers', objCol, condition,(result) =>{
            callback(result);
        });
    },
    
    deleteOne: function(col, value, callback){
        orm.deleteOne('burgers', col, value, (result)=>{
            callback(result);
        });
    }

}


module.exports = burger;
