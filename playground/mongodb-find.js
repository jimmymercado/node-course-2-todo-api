//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost/Users', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').find({
    //   _id: new ObjectID('5983dbcdc20837993f6de9a3')
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log("Unable to fetch todos", err);
    // });

    db.collection('Users').find({name: "Jiomari"}).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log("Unable to fetch users", err);
    });

    db.collection('Users').find().count().then((count) => {
      console.log(`User count: ${count}`);

    }, (err) => {
      console.log("Unable to fetch todos", err);
    });

    // db.close(() =>{
    //     console.log('Connection is now close.')
    // });

});
