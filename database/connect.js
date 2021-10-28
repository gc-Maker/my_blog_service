const mysql = require("mysql");
const pool = mysql.createPool({
    user: 'root',
    password: 'root',
    database: 'my_blog'
})

module.exports = function sqlRequest(sql, props) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if(!err) {
                connection.query(sql, props,(e, results)=> {
                    if(!e) {
                        resolve(results);
                    } else {
                        reject(e);
                    }
                    connection.destroy();
                })
            } else {
                reject(err);
                connection.destroy();
            }
        })
    })
};