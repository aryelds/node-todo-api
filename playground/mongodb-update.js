const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5be9897470eb90ab2b27d3e2')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }). then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5be5e1b5a7dc9829c402eabf')
    }, {
        $set: {
            name: 'Ana'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }). then((result) => {
        console.log(result);
    });

    // client.close();
});