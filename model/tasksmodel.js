import mongoose from "mongoose";


const tasksSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true, 'title is required']
    },
    date:{
        type:String,
        required:[true, 'date is required']
    },
    finished:{
        type:Boolean,
        default: false
       
    },
})




const Tasks = mongoose.model('tasks', tasksSchema)


export default Tasks