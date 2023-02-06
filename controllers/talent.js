import { TalentAccount } from '../models/talentAccount.js'

const update = async (req, res) => {
  try {
      const talentAccount = await TalentAccount.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        )
      res.status(200).json(talentAccount)
  } catch (error) {
      res.status(500).json(error)
      console.log(error);
  }
}

const createExperience = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

const createEducation = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

const createTraining = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

export {
  update,
  createExperience,
  createEducation,
  createTraining,
}
