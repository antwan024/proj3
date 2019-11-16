import axios from "axios";

export default {
  // Gets all achievments
  getAchievements: function() {
    return axios.get("/api/achievements");
  },
  // Gets the achievment with the given id
  getAchievement: function(id) {
    return axios.get("/api/achievements/" + id);
  },
  // Deletes the achievment with the given id
  deleteAchievement: function(id) {
    return axios.delete("/api/achievements/" + id);
  },
  // Saves a achievment to the database
  saveAchievement: function(achievmentData) {
    return axios.post("/api/achievements", achievmentData);
  },
  getEvents: function() {
    return axios.get("/api/events");
  },
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  },
  saveUserEvent: function(userEventData) {
    return axios.post("/api/userEvents", userEventData);
  }

};
