const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true},
    lastname: {
      type: String,
      required: true}, 
      firstname: {
        type: String,
        required: true},
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  categories: {type: Schema.Types.ObjectId, ref: 'Category'},
  subjects: [{type: Schema.Types.ObjectId, ref: 'Subject'}],
  lessons: [{type: Schema.Types.ObjectId, ref: 'Lesson'}],
  role: {type:String, enum: ['student', 'tutor', 'admin'], default: 'student'}
},
  {timestamps: true });

module.exports = mongoose.model("User", userSchema);

