//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://misaacs21:rosieleedoG1@cen3031cluster-mta7x.mongodb.net/admin?retryWrites=true&w=majority'
  }, 
  openCage: {
    key: 'bd0c72a96b3a4fbba2924cc1b61ea5f8' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};