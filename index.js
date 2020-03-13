
require('dotenv').config()

const server = require('./server')

// server.use('*', cors())

// server.use(function(req, res, next) {
//     next(createError(404))
// })

server.set('port', process.env.PORT || 8030);
server.listen(server.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Action happening on port ${server.get('port')}`);
});
module.exports = server;