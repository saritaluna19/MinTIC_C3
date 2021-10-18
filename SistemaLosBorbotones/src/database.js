const mongoose= require('mongoose');

const URI='mongodb://localhost/SPRINT4';

mongoose.connect(URI)
    .then(db=>console.log('DB esta conectada'))
    .catch(err=>console.error(err));

module.exports=mongoose;