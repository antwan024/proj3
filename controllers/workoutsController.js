const db = require("../models");

// Defining methods for the workoutsController
module.exports = {
    findAll: function(req, res) {
        db.Workout
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Workout
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Workout
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Workout
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Workout
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addPoints: function(req, res) {
        db.Workout
            .aggregate(
                { $match: {
                    _id: "foo"
                }},
            
                { $project: {
                    _id: 1,
                    total: { $add: ["$workoutPoints"] }
                }}
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
