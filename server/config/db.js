const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://digitalmarker:<sads>@cluster0.v7zq1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log(ëror)
    client.close();
});
