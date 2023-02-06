import mongoose from 'mongoose'


const Schema = mongoose.Schema

const listSchema = new Schema({
  titleOfList: String,
  talent: [{ type: Schema.Types.ObjectId, ref: 'TalentAccount' }],
  notes: String
}, {
  timestamps: true
})

const cdAccountSchema = new Schema({
  company: String,//producing entity that the CD represents
  lists: [listSchema],
  blacklist: [{ type: Schema.Types.ObjectId, ref: 'TalentAccount' }]
}, {
  timestamps: true,
})

const CDAccount = mongoose.model('CDAccount', cdAccountSchema)

export { CDAccount }