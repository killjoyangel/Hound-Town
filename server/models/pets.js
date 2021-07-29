const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const petSchema = new Schema({
  dogBreed: {
    type: String,
    minlength:1,
    maxlenght:20,
    required: 'You need to enter a breed!',
    trim: true,
  },
  dogName: {
    type: String,
    minlength:1,
    maxlenght:20,
    required: 'You need to enter a name!',
    trim: true,
  },
  dogGender:{
  type: String,
  minlength:1,
  maxlenght:7,
  required: 'You need to enter a gender!',
  trim: true,
  },
  dogAge:{
    type: String,
    minlength:1,
    maxlenght:2,
    required: 'You need to enter an age!',
    trim: true,
    },
    User: {
      type:Schema.Types.ObjectId,
      ref: 'User'
    }

});

const Pet = model('Pets', petSchema);
module.exports = Pet;
