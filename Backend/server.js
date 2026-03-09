const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/healthpulse");

const Pulse = mongoose.model("Pulse",{
pulse:Number,
date:{type:Date,default:Date.now}
});

app.post("/api/pulse", async(req,res)=>{

const data = new Pulse({
pulse:req.body.pulse
});

await data.save();

res.send("Saved");

});

app.get("/api/history",async(req,res)=>{

const data=await Pulse.find();

res.json(data);

});

app.listen(5000,()=>{
console.log("Server Running");
});
