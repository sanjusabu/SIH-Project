const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployerJobSchema = new Schema({
  company: { type: String, required: true },
  jobtitle: { type: String, required: true },
  industry: { type: String, required: true },
  education: { type: String, required: true },
  experience: { type: Number, required: true },
  joblocation_address: { type: String, required: true },
  skills: { type: String, required: true },
  vacancy: { type: Number, required: true },
  payrate: { type: Number, required: true },
  date: { type: Date, required: true },
  userid: { type: String, required: true },
});

module.exports = mongoose.model("EmployerJobModel", EmployerJobSchema);
