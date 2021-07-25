const { AuthenticationError } = require('apollo-server-express');
const { user, pets } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('pets');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('pets');
    },
    // pet: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Pet.find(params).sort({ createdAt: -1 });
    // },
    // pet: async (parent, { petId }) => {
    //   return Pet.findOne({ _id: petId });
    // },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('pets');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    
    addPet: async (parent, {petText}, context) => {
      if (context.user) {
        const pet = await Pet.create({
          petText,
          petAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { pets: pet._id } }
        );

        return pet;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // removePet: async (parent, { petId }, context) => {
    //   if (context.user) {
    //     const pet = await Pet.findOneAndDelete({
    //       _id: petId,
    //       petAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $pull: { pets: pet._id } }
    //     );

    //     return pet;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
}
}

module.exports = resolvers;
