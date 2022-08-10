const { validationResult } = require('express-validator')
const HttpError = require('../models/http-error');
const UserModel = require('../models/UserModel');
const express = require('express')
const axios = require('axios')

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  const { name, email, password, mobile } = req.body;
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
    name: name,
    email: email,
    password: password,
    mobilenumber: mobile
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

const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }

  let existingUser;
  try {
    existingUser = await UserModel.findOne({ email: email });
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


  res.json({ user: existingUser.toObject({ getters: true }) });
}

const search = (req, res, next) => {
  // console.log("sanju")
  console.log(req.body)
  const toSearch = req.body.search
  const place = req.body.place

  const targetURL = `https://api.adzuna.com/v1/api/jobs/in/search/1?&results_per_page=20&content-type=application/json&app_id=da3b4b1b&app_key=36a0c2ed8bb2374466527f58761a7f3d&what=${toSearch}&where=${place}`;

  axios.get(targetURL)
    .then(response => {
      // res.writeHead(200, headers);
      console.log(response.data);
      const sendResponse = response.data.results
      // res.json({sendResponse})
      // console.log(sendResponse)
      const requiredinfo = sendResponse.map((i) => {
        return ({
          id: i.id,
          title: i.title,
          company: i.company.display_name,
          description: i.description,
          location: i.location.display_name,
        })
      })
      res.json({ requiredinfo })

    }).catch(response => {
      // res.writeHead(500, headers);
      console.log('error');
    });
}


exports.signup = signup;
exports.login = login;
exports.search = search