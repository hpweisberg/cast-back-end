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
    const talentAccount = await TalentAccount.findById(req.params.id)
    talentAccount.experience.push(req.body)
    talentAccount.save()
    res.json(talentAccount)
  } catch (error) {
    console.log(error);
  }
}

const createEducation = async (req, res) => {
  try {
    const talentAccount = await TalentAccount.findById(req.params.id)
    talentAccount.education.push(req.body)
    talentAccount.save()
    res.json(talentAccount)
  } catch (error) {
    console.log(error);
  }
}

const createTraining = async (req, res) => {
  try {
    const talentAccount = await TalentAccount.findById(req.params.id)
    talentAccount.training.push(req.body)
    talentAccount.save()
    res.json(talentAccount)
  } catch (error) {
    console.log(error);
  }
}

const updateExperience = async (req, res) => {
  try {
    const talentAccount = await TalentAccount.findById(req.params.id)
    const experience = talentAccount.experience.id(req.params.experienceId)
    experience.set(req.body)
    talentAccount.save()
    res.json(talentAccount)
  } catch (error) {
    console.log(error);
  }
}

const updateEducation = async (req, res) => {
  try {
    const talentAccount = await TalentAccount.findById(req.params.id)
    const education = talentAccount.education.id(req.params.educationId)
    education.set(req.body)
    talentAccount.save()
    res.json(talentAccount)
  } catch (error) {
    console.log(error);
  }
}

const updateTraining = async (req, res) => {
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
  updateExperience,
  updateEducation,
  updateTraining,
}
