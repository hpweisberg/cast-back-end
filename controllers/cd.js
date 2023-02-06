import { CDAccount } from '../models/cdAccount.js'
import { TalentAccount } from '../models/talentAccount.js'

const update = async (req, res) => {
  try {
      const cdAccount = await CDAccount.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        )
      res.status(200).json(cdAccount)
  } catch (error) {
      res.status(500).json(error)
  }
}

const createList = async (req, res) => {
  try {
    const cdAccount = await CDAccount.findById(req.params.id)
    cdAccount.lists.push(req.body)
    cdAccount.save()
    res.json(cdAccount)
  } catch (error) {
    console.log(error);
  }
}

const addToBlacklist = async (req, res) => {
  try {
    const blacklistTalent = await TalentAccount.findById(req.params.talentId)
    const cd = await CDAccount.findByIdAndUpdate(
      req.params.id,
      { $push: { blacklist: blacklistTalent } },
      { new: true }
      )
    res.json(cd)
  } catch (error) {
    console.log(error);
  }
}


export {
  update,
  createList,
  addToBlacklist,
}
