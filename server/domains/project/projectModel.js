import mongoose from "mongoose";
const {Schema} = mongoose;

const ProjectSchema = new Schema({
   name: {
      type : String,
      required : true,
   },
   description:{
      type : String,
      required : true,  
   },
   date:{
      type : Date,
      required : Date.now,
   },
});

export default mongoose.model('project', ProjectSchema);