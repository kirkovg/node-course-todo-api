// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';


MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to the mongodb server');
  }
  console.log('Connected to mongodb server');


  /*client.db(dbName).collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a86f56356145e1b67f9e23e')
  }, {
    $set: {
      completed: false
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
*/

  client.db(dbName).collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a7707c9afd83d2740f98039')
  }, {
    $set: {
      name: 'Gjorgji'
    },
    $inc: {
      age: 5
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // close
  client.close();
});
