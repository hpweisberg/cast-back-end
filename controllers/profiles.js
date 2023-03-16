import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'
import { TalentAccount } from '../models/talentAccount.js'
import { CDAccount } from '../models/cdAccount.js'

// function index(req, res) {
//   Profile.find({})
//   .then(profiles => res.json(profiles))
//   .catch(err => {
//     console.log(err)
//     res.status(500).json(err)
//   })
// }

const index = async (req, res) => {
  try {
    const profiles = await Profile.find({})
      .populate('talentAccount')
      .populate('cdAccount')
    res.json(profiles)
  } catch (error) {
    console.log(error);
  }
}

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id)
      .populate([{
        path: 'cdAccount',
        model: 'CDAccount'
      }, {
        path: 'talentAccount',
        model: 'TalentAccount'
      }])
    // profile.populate('cdAccount')
    // profile.populate('talentAccount')
    if (profile.cdAccount) {
      profile.isCd = true
    } else {
      profile.isCd = false
    }
    console.log('PROFILE', profile);
    res.status(200).json(profile)
  } catch (error) {
    console.log(error)
  }
}

function addPhoto(req, res) {
  const imageFile = req.files.photo.path
  Profile.findById(req.params.id)
  .then(profile => {
    cloudinary.uploader.upload(imageFile, {tags: `${req.user.email}`})
    .then(image => {
      profile.photo = image.url
      profile.save()
      .then(profile => {
        res.status(201).json(profile.photo)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
}

const update = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    .populate([{
      path: 'cdAccount',
      model: 'CDAccount'
    }, {
      path: 'talentAccount',
      model: 'TalentAccount'
    }])
    res.status(200).json(profile)
  } catch (error) {
    console.log(error)  
    res.status(500).json(error)
  }
}

const createTalentAccount = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id)
    const talentAccount = await TalentAccount.create(req.body)
    talentAccount.name = profile.name
    profile.talentAccount = talentAccount
    talentAccount.headshot = profile.photo
    talentAccount.profile = profile._id
    profile.isCd = false
    console.log(profile);
    await talentAccount.save()
    await profile.save()
    res.json(profile)
  } catch (error) {
    console.log(error);
  }
}

const createCdAccount = async (req, res) => {
  try {
    const cdAccount = await CDAccount.create(req.body)
    const profile = await Profile.findById(req.params.id)
    profile.cdAccount = cdAccount._id
    profile.populate('cdAccount')
    profile.isCd = true
    await profile.save()
    res.json(profile)
  } catch (error) {
    console.log(error);
  }
}

const updateTalentAccount = async (req, res) => {
  try {
      const talentAccount = await TalentAccount.findByIdandUpdate(
        req.params.talentId,
        req.body,
        { new: true }
        )
      res.status(200).json(talentAccount)
  } catch (error) {
      res.status(500).json(error)
  }
}

const updateCdAccount = async (req, res) => {
  try {
      const profile = await Profile.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
      )
      res.status(200).json(profile)
  } catch (error) {
      res.status(500).json(error)
  }
}


export { index, 
  getProfile, 
  addPhoto, 
  update,
  createTalentAccount,
  createCdAccount,
  updateTalentAccount,
  updateCdAccount,
}
