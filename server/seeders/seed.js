const db = require('../config/connection');
const { User, Pet } = require('../models');
const userSeeds = require('./userSeeds.json');
const petSeeds = require('./petSeeds.json');

db.once('open', async () => {
    await Pet.deleteMany({});
    await User.deleteMany({});

  const pets = await Pet.insertMany(petSeeds);
  const users = await User.insertMany(userSeeds);
  // tempUser.petSeeds.push(newPet._id);
  // await tempUser.save();
  console.log('everything seeded!');
  process.exit(0);
});














    /*await User.create(userSeeds);
    for (let i = 0; i < userSeeds.length; i++) {
      const { _id, dogName } = await Pet.create(petSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: dogName },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }*/

  //console.log('all done!'),
 // process.exit(0)

