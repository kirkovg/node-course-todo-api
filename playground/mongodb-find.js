// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';


MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('Unable to connect to the mongodb server');
  }
  console.log('Connected to mongodb server');

 /* client.db(dbName).collection('Todos')
    .find({
      _id: new ObjectID('5a86ecaf56145e1b67f9e160')
    })
    .toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });*/

/*  client.db(dbName).collection('Todos')
    .find()
    .count()
    .then((number) => {
      console.log(`Todos count: ${number}`);
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });*/

  // challenge
  client.db(dbName).collection('Users')
    .find({
      name: 'Gjorgji'
    })
    .toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });

  client.close();
});
