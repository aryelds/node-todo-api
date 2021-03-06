const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '5be9cd60f5feba1734e7f963';

if (!ObjectID.isValid(id)) {
    throw 'ID NOT VALID';
}

Todo.find({
   _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User info', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log("ID invalid!"));

