//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost/Users', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');



    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5983ebb2c20837993f6dee57')
    }, {
        $set: {
          name:'Jiomari'
        },
        $inc: {
          age:1
        }

    }, {
      returnOriginal:false
    }).then((result) =>{
      console.log(result);
    });

    // db.close(() =>{
    //     console.log('Connection is now close.')
    // });

});
