const mongoose = require('mongoose');
 function connect (){

    const uri = 'mongodb+srv://alexthan:alexthan@cluster0.vhzsz0i.mongodb.net/alexthan?retryWrites=true&w=majority'
    try{
         mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
        const connection = mongoose.connection;
        connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
        })
    }catch(e){
        console.log(e);
    }
}

module.exports = connect;