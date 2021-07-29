const { AuthenticationError } = require('apollo-server-express');
const { User, Pets } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    //   reads request header for jwt
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
        .select("-__v -password");
        // .populate("books");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
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

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    // addUser: async (parent, { username, email, password }) => {
    //   const user = await User.create({ username, email, password });
    //   const token = signToken(user);
    //   return { token, user };
    // },
    
    addPet: async (parent, {petText}, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { addPet: petData } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    //   if (context.user) {
    //     const pet = await Pet.create({
    //       petText,
    //       petAuthor: context.user.username,
    //     });

    //     await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { pets: pet._id } }
    //     );

    //     return pet;
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    removePet: async (parent, { petId }, context) => {
      if (context.user) {
        const pet = await Pet.findOneAndDelete({
          _id: petId,
          petAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { pets: pet._id } }
        );

        return pet;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
}
}


module.exports = resolvers;
