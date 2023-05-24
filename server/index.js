const express = require('express')
const cors=require('cors')
const app = express()
PORT = 7070;
const bodyParser=require('body-parser')
const mongoose = require('mongoose');
app.use(cors())
app.use(bodyParser.json());

const RobotsSchema = new mongoose.Schema({
  price:Number,
  title:String,
  description:String,
  imageUrl:String,
});
const RobotModel=new mongoose.model('Robots',RobotsSchema);



app.get("/api", (req, res) => {
  res.send("welcome to out API!");
});

app.get("/api/robots", async (req, res) => {
  const { title } = req.query;
  const robots = await RobotModel.find();
  if (!title) {
    res.status(200).send(robots);
  } else {
    const searchedRobots = robots.filter((x) =>
      x.title.toLowerCase().trim().includes(title.toLowerCase().trim())
    );
    res.status(200).send(searchedRobots);
  }
});

app.get("/api/robots/:id", async(req, res) => {
  const { id } = req.params;
  const robot = await RobotModel.findById(id)
  res.status(200).send(robot);
});

app.delete("/api/robots/:id",async(req, res) => {
  const id = req.params.id;
  //delete
  const deleteRobot = await RobotModel.findByIdAndDelete(id);
  res.status(203).send({
    message: `${deleteRobot.title} deleted successfully!`,
  });
});

app.put("/api/robots/:id", async(req, res) => {
  const id = req.params.id;
  const { title,imageUrl,description,price} = req.body;
  const updatingRobot = {title:title,imageUrl:imageUrl,description:description,price:price};
  await RobotModel.findByIdAndUpdate(id,updatingRobot);
  res.status(200).send(`${updatingRobot.title} updated successfully!`);
});



//POST ARTIST - MONGO DB
app.post("/api/robots", async (req, res) => {
  const { title,imageUrl,description,price} = req.body;
  const newRobot = new RobotModel({
    title:title,
    price:price,
    description:description,
    imageUrl: imageUrl,
  });
  await newRobot.save();
  res.status(201).send({
    message: `${newRobot.title} posted successfully`,
    payload: newRobot,
  });
});
app.listen(PORT, () => {
console.log(`App running on PORT: ${PORT}`);
});
mongoose.connect('mongodb+srv://asif_admin:Admin123@app.6i78tjn.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Mongo DB connected!");
});