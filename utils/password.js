const bcrypt = require('bcrypt');

const saltRounds = 8;

const hashPass = function (password) {
    return bcrypt.hash(password, saltRounds)
}
const compareHash = (password, hash) => bcrypt.compare(password, hash)

module.exports = {
    hashPass,
    compareHash
}