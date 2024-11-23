const Portfolio = require("../models/portfolio");
const Projects = require("../models/projects");

exports.getAllData = async (req, res) => {
  try {
    console.log("Welcome");
    const data = await Portfolio.find();
    console.log("🚀 ~ exports.getAllData= ~ data:", data);
    res.status(201).send(data[0]);
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.getProjects = async (req, res) => {
  try {
    console.log("Welcome");
    const data = await Projects.find();
    console.log("🚀 ~ exports.getAllData= ~ data:", data);
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};
