// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';


MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to the mongodb server');
  }
  console.log('Connected to mongodb server');

  // deleteMany
/*
  client.db(dbName).collection('Todos').deleteMany({
    text: 'Eat lunch'
  }).then((result) => {
    console.log(result);
  });
*/

/*  // deleteOne
  client.db(dbName).collection('Todos').deleteOne({
    text: 'Eat lunch'
  }).then((result) => {
    console.log(result);
  });*/

  //findOneAndDelete
/*  client.db(dbName).collection('Todos').findOneAndDelete({
    completed: true
  }).then((result) => {
    console.log(result);
  });*/

  client.db(dbName).collection('Users').deleteMany({
    name: "Gjorgji"
  }).then((result) => {
    console.log(result);
  });

  client.db(dbName).collection('Users').findOneAndDelete({
    _id: new ObjectID("5a7707c9afd83d2740f98039")
  }).then((result) => {
    console.log(result)
  });

  client.close();
});
