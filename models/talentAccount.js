import mongoose from 'mongoose'


const Schema = mongoose.Schema

const talentAccountSchema = new Schema({
  headshot: String,//The POST request that creates the account will set this string to the Cloudify image that they uploaded on sign up
  unionStatus: {
    type: String,
    enum: ['SAG and AEA', 'SAG', 'AEA', 'Not Affiliated'],
    required: true
  },
  hair: String,
  eyes: String,
  height: Number,//Can the form have 2 fields? One for Feet and One for Inches?
  weight: Number,
  about: String,
  experience: [experienceSchema],
  education: [educationSchema],
  training: [trainingSchema],
  skills: Array,//custom Strings
  trades: Array,
  reelLink: String//href to a youtube video
}, {
  timestamps: true,
})

const TalentAccount = mongoose.model('TalentAccount', talentAccountSchema)

export { TalentAccount }
