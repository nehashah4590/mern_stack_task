const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;
require("./db/dbconnect")
const Register = require("./models/register")

app.use(cors());
app.use(express.json());

app.get("/api/home", (req, res) =>{
    res.send("hello this is connection to backend")
});

app.post("/api/contact",  async (req, res)=>{
    
    try{
        const contactUs = new Register ({
            firstname: req.body.firstname,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            getintouch: req.body.getintouch,
            message: req.body.message,
        })
        const registered = await contactUs.save();
        res.send("Mail sent. Our team will contact you soon.")

    }catch(e){
        res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})