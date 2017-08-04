//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost/Users', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Something to do'}).then((res) => {
    //   console.log(res);
    // });
    //deleteOne

    // db.collection('Todos').deleteOne({text:'walk the dog'}).then((res) => {
    //   console.log(res);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((res) => {
    //   console.log(res);
    // });
    //deleteMany
    db.collection('Users').deleteMany({name:'Marizel'}).then((res) => {
      console.log(res);
    });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('5983b4c4699d63514ce62872')
    }).then((res) => {
      console.log(res);
    });


    // db.close(() =>{
    //     console.log('Connection is now close.')
    // });

});
