var pgp = require("pg-promise")(/*options*/);
var cn = {
    host: 'localhost', // server name or IP address; 
    port: 5432,
    database: 'nhlapp',
    user: 'patrickbogucki',
    // password: ''
};
var db = pgp(cn);

exports.selectUsers = function() {
    db.query("SELECT * FROM users")
        .then(function (data) {
            console.log("Users", data[0].username);
        })
        .catch(function (error) {
            console.log("ERROR:", error);
        });
};

exports.addUser = function(userName) {
    db.none("INSERT INTO users(username) VALUES($1)", [userName])
        .then(function() {
            console.log("Insert OK");
        })
        .catch(function(error) {
            console.log("INSERT ERROR");
            done();
        });
};

pgp.end();