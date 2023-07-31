const Letters = require("../models/newsLetterModel");
const mongoose = require("mongoose");
const validator = require("validator");

const getEmails = async (req, res) => {
  try {
    const letters = await Letters.find({}).Sort({ createdAt: -1 });
    res.status(200).json(letters);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addEmail = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      throw Error("Please provide an email");
    }
    if (!validator.isEmail(email)) {
      throw Error("Please provide a valid email");
    }
  
    const exists = await Letters.findOne({ email });
  
    if (exists) {
      throw Error("You have already been added to the news Letter");
    }
    const letter = await Letters.create({ email });
    
    res.status(200).json(letter);
}
   catch (error) {
    res.status(400).json({error : error.message});
  }

};

module.exports = {getEmails, addEmail}
