const router = require("express").Router()
const Workout = require("../models/workout")

router.get("/api/workouts",(req, res) => {
    Workout.find({}).then(data => {
        res.json(data)
    })
});
router.put("/api/workouts/:id",(req, res) => {

});
router.post("/api/workouts",(req, res) => {

});
router.get("/api/workouts/range",(req, res) => {

});

module.exports=router;