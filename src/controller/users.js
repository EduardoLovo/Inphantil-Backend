const User = require("../models/User");

const getAll = async (req, res) => {
  await User.find({})
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAll,
};
