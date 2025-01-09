import express from "express";
import mongoose from "mongoose";
import Tasks from './model/tasksmodel.js'

const app = express();

app.use(express.json());

// Define the port variable
const port = 5555;

app.get('/', async(req,res)=>{
   const tasks = await Tasks.find()
   res.status(200).json(tasks)

})


app.post('/', async(req,res)=>{
   const {
      title , date, finished } = req.body;

   const newData = new Tasks({
      title,
      date,
      finished
   })

   const task = await newData.save();

   res.status(201).json(task)

})



app.put('/:id', async(req,res)=>{
   

   const {title , date, finished } = req.body;

   const task = await Tasks.findById(req.params.id)

   if (task){
      task.title = title
      task.date = date
      task.finished = finished
      const updatedTask= await task.save();
      res.status(200).json(updatedTask)
   }

   

   

})


app.delete('/:id', async(req,res)=>{
   const task = await Tasks.findByIdAndDelete(req.params.id)
   res.status(200).json({message:"Waa la delete gareeyay!"});

})





// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Connect to the MongoDB database
mongoose.connect("mongodb+srv://cabdisalaamxasan2770588:cabdisalaamxasan2770588@cluster0.h3rxm.mongodb.net/mytasks?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to the database");
})
.catch((error) => {
    console.error("Database connection error:", error);
});
