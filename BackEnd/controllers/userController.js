const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const UserModel = require('../models/UserModel');

const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }
    const { name, email, password,mobile } = req.body;
    console.log(req.body)
    let existingUser;
    try {
      existingUser = await UserModel.findOne({ email: email });
    } catch (err) {
      const error = new HttpError(
        'Signing up failed, please try again later.',
        500
      );
      return next(error);
    }
  
    if (existingUser) {
      const error = new HttpError(
        'User exists already, please login instead.',
        422
      );
      return next(error);
    }
  
    const createdUser = new UserModel({
      name:name,
      email:email,
      password:password,
      mobilenumber:mobile
    });
  console.log(createdUser)
    try {
      const newuser = await createdUser.save();
      // console.log(newuser,'no new user error')
    } catch (err) {
      console.log("saving error")
      const error = new HttpError(
        'Signing up failed, please try again later.',
        500
      );
      return next(error);
    }
  
    res.status(201).json({ user: createdUser.toObject({ getters: true }) });
  };

  const login = async(req,res,next)=>
  {
    const {email,password} = req.body;
    console.log(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }

    let existingUser;
    try {
      existingUser = await UserModel.findOne({ email:email });
    } catch (err) {
      const error = new HttpError(
        'Login failed, check your crednetials or signup.',
        500
      );
      return next(error);
    }
      // console.log(existingUser)
    if (!existingUser || existingUser.password !== password) {
      // console.log(password,existingUser.password)
      const error = new HttpError(
        'Invalid credentials, could not log you in.',
        401
      );
      return next(error);
    }
  
    
  res.json({ user:existingUser.toObject({getters:true}) });
  }

  exports.signup = signup;
  exports.login = login;
  