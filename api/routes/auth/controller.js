const User = require("../users/model");

const jwt = require("jsonwebtoken");

module.exports = {
  get: (req, res) => {
    const text = "AUTH ENDPOINT";
    res.send(text);
  },

  // SIGN UP WITH A NEW USER DATA

  signup: (req, res, next) => {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      role: req.body.role || "user"
    });

    newUser.save(function(err) {
      if (err) {
        res.send({
          success: false,
          message: "Sign up failed"
        });
      } else {
        res.send({
          success: true,
          message: "Sign up success",
          user: newUser
        });
      }
    });
  },
  // LOGIN WITH PROVIDED USER DATA

  login: (req, res, next) => {
    User.findOne(
      {
        email: req.body.email,
        password: req.body.password
      },
      (err, user) => {
        if (err) {
          res.status(500).send({
            message: "Error when login"
          });
        } else if (user === null) {
          res.status(400).send({
            message: "User is not found or password is not match"
          });
        } else {
          const data = {
            _id: user._id,
            id: user.id,
            name: user.name,
            email: user.email
          };
          const token = jwt.sign(data, process.env.SECRET, { expiresIn: "1d" });
          res.send({
            token: token,
            data: data
          });
        }
      }
    );
  },

  // CHECK TOKEN FOR AUTHORIZATION

  checkToken: (req, res, next) => {
    const decoded = jwt.verify(req.body.token, process.env.SECRET);
    res.send(decoded);
  }
};
