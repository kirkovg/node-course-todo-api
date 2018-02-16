const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(url);

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

const newTodo = new Todo({
  text: 'Cook dinner'
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (err) => {
  console.log('Unable to save todo', err);
});

const otherTodo = new Todo({
  text: 'Feed the cat',
  completed: true,
  completedAt: 123
});

otherTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (err) => {
  console.log('Unable to save todo', err);
});