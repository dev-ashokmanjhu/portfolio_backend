const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Projects = mongoose.model("projects", projectsSchema);
module.exports = Projects;
