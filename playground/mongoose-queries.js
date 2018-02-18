const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose-config');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

/*
const id = '5a89d14ed2351c00207e128311';

if (!ObjectID.isValid(id)) {
  return console.log('Id not valid');
}
*/


/*Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo', todo);
});*/

/*
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by id', todo);
}).catch(err => console.log(err));*/


const userId = '5a89c663ae142513f81b70d3';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log('User by id', user);
}, (err => console.log(err)));