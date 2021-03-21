// {
//     day: new Date().setDate(new Date().getDate()-10),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
const mongoose = require("mongoose")
// const Schema = mongoose.Schema
// const model = mongoose.model 
const {Schema, model} = mongoose
const workoutSchema = new Schema({
    day:{
        type: Date, default: Date.now
    },
    exercises:[
        {
            type: {type:String},
            name: {type:String},
            duration: {type:Number},
            weight: {type:Number},
            reps: {type:Number},
            sets: {type:Number},
            distance: {type:Number}
        }
    ]
});

const Workout = model("Workout",workoutSchema)

module.exports = Workout;

