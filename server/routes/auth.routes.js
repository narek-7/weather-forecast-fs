const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const tokenService = require("../services/token.service");
const router = express.Router({ mergeParams: true });

// npm install bcryptjs jsonwebtoken express-validator
//1. get data(email, password)
//2. check if user email is unique
//3. hash password
//4. create user
//5. generate tokens

router.post("/signUp", async (req, res) => {
   try {
      const { email, password } = req.body;

      const existingUser = awaitUser.findOne({ email });

      if (existingUser) {
         return res.status(400).json({
            error: {
               message: "User already exists",
               code: 400,
            },
         });
      }
      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = await User.create({
         email: email,
         password: hashedPassword,
      });

      const tokens = tokenService.generate({ _id: newUser._id });

      //we have to return token interface
      res.status(201).send({ ...tokens, userId: newUser._id });
   } catch (e) {
      res.status(500).json({
         message: "There is an error on server. Please try again later",
      });
   }
});

router.post("/signInWithPassword", async (req, res) => {});

router.post("/token", async (req, res) => {});

module.exports = router;
