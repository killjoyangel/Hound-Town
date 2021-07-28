const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const petSchema = new Schema({
  dogBreed: {
    type: String,
    required: 'You need to enter a breed!',
    trim: true,
  },
  dogName: {
    type: String,
    required: 'You need to enter a name!',
    trim: true,
  },
  dogGender: {
    type: String,
    trim: true,
  },
  dogAge: {
    type: String, 
     trim: true,
  },
});

module.exports = petSchema;
