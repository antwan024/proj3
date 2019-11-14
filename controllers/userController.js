const db = require("../models");

// Defining methods for the foodsController
module.exports = {
    findById: function(req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    addPoints: function(req, res) {
        db.Food
            .aggregate(
                { $match: {
                    _id: "foo"
                }},
            
                { $project: {
                    _id: 1,
                    totalFoodPoints: { $add: ["$foodPoints"] }
                }}
            )
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        
        

    }




//     db.user.aggregate(
//         // Limit to relevant documents and potentially take advantage of an index
//         { $match: {
//             user_id: "foo"
//         }},
    
//         { $project: {
//             user_id: 1,
//             total: { $add: ["$user_totaldocs", "$user_totalthings"] }
//         }}
//     )
// };
