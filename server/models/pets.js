const { Schema, model } = require('mongoose');

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

const Pets = model('Pets', petSchema);

module.exports = Pets;
