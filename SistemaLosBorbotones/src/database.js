const mongoose= require('mongoose');
const { MongoClient } = require('mongodb');

const URI="mongodb+srv://fzapata:nova6303@cluster0.gg8ak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(URI)
    .then(db=>console.log('DB esta conectada'))
    .catch(err=>console.error(err));

module.exports=mongoose;