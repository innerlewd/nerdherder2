const client = require('../../client/src/index');

display = (req, res) => {
    return client(res);
}

module.exports = clientCtrl