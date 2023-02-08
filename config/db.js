const { Sequelize } = require('sequelize');

const db = new Sequelize(`postgres://ijrciohi:nONtvH6-Kn3youRVDS6NXsq1wE7pyBr-@babar.db.elephantsql.com/ijrciohi`, {
    logging: false,
    native: false,
});
const connectPostgres = new Promise((resolve, reject) => {
    db.sync({ force: false })
        .then(resolve)
        .catch(reject)
})
module.exports = {
    db,
    connectPostgres
}