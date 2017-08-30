const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

//
// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('59a7274ef5db5888eb813740').then((res) => {
  console.log(res);
})
