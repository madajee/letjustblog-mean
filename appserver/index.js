var config = require('./config');
var mongoose = require('mongoose');
var connectString = config.getDbConnectionString();
if (connectString) {
  mongoose.connect(connectString, { useNewUrlParser: true })
  .then(() => {
      console.log('Database connection successful')
    })
    .catch(err => {
      console.error('Database connection error')
    });
}
else {
  console.log('connect to database with mongodb connect string');
  console.log('you can run export for variable: DATABASE_CONNECT_STRING')
}
module.exports =  {
}