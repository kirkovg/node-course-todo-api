// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';


MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to the mongodb server');
  }
  console.log('Connected to mongodb server');

  // client.db(dbName).collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.db(dbName).collection('Users').insertOne({
    name: 'Gjorgji',
    age: 22,
    location: 'Ohrid'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});
