
const mongoose = require("mongoose")
const uri = "mongodb+srv://ernehashah822:neha123@cluster0.uhcmytd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


// connecting to mongoDB
mongoose.connect(uri,{dbName: "testDb"}).then(() => {
  console.log("Connected to cluster 0 db");
}).catch((e)=>
{
  console.log(e);
})