const auth = require('basic-auth');
require('dotenv').config();
const username = process.env.USER_NAME
const password = process.env.USER_PASSWORD
const admins = {
  username :username ,
  password: password,
};

module.exports = function (request, response, next) {
  const user = auth(request);
  console.log(user)
  if (!user || admins.username !== user.name || admins.password !== user.pass) {
    response.set('WWW-Authenticate', 'Basic realm="example"');
    return response.status(401).send();
  }
  return next();
};