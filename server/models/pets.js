const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const petSchema = new Schema({
  dogText: {
    type: String,
    required: 'You need to leave a pet!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  dogAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Pets = model('Pets', petSchema);

module.exports = pets;
