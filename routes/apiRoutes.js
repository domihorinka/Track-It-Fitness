const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts",(req, res) => {
    Workout.find({}).then(data => {
        res.json(data)
    })
});

router.put("/api/workouts/:id",({ body, params}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
      )
        .then(workOut => {
          res.json(workOut);
        })
        .catch(err => {
          res.json(err);
});
});
router.post("/api/workouts",(req, res) => {
    Workout.create(req.body).then((workOut => {
        res.json(workOut);
    })).catch(err =>{
        res.json(err);
    })
   
});

router.get("/api/workouts/range",(req, res) => {
    Workout.find({}).limit(7)
    .then((workOut) => {
        res.json(workOut)
    }).catch(err => {
        res.json(err)
    })
});

module.exports= router;