const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = '59a49cc50d58891988ffcd3111';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => {
//   console.log(e);
// });

User.findById('599df6ec44e7b847cc8ea4af').then((user) => {
  if(!user){
    return console.log('user id not found');
  }
  console.log('User ID', user);
}).catch(() => console.log(e));
