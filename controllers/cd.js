import { CDAccount } from '../models/cdAccount.js'

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


export {
  update,
}
