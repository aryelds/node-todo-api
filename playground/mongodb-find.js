const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({_id: new ObjectID('5be622e870eb90ab2b27ca66')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    //

    // db.collection('Todos').countDocuments({}).then(numOfDocs => {
    //     console.log(numOfDocs)
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Aryel'}).toArray().then((docs) => {
        console.log('Usuário');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data', err);
    });

     // client.close();
});