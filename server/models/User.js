const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const petSchema = require("./Pets");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 1,
  },
  Pets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
  ],
});

// hash user password

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
userSchema.virtual("petCount").get(function () {
  return this.savedPetslength;
});

const User = model("User", userSchema);

module.exports = User;
