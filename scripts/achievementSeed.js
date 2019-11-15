const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/anthonyProject3"
);

const achievementSeed = [
  {
    type: "foodPoints",
    achievementPoints: 10,
    summary: "Earned a free lunch at Chipotle!",
    date: new Date(Date.now()),
    earned: false
  },
  {
    type: "eventPoints",
    achievementPoints: 10,
    summary: "Earned a free Live Nation show!",
    date: new Date(Date.now()),
    earned: false
  },
  {
    type: "workoutPoints",
    achievementPoints: 10,
    summary: "Earned a free Yoga session!",
    date: new Date(Date.now()),
    earned: false
  },
  {
    type: "foodPoints",
    achievementPoints: 10,
    summary: "Earned a free culinary session at Cook St!",
    date: new Date(Date.now()),
    earned: false
  }
];

db.Achievement
  .remove({})
  .then(() => db.Achievement.collection.insertMany(achievementSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
