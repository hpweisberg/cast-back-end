import mongoose from 'mongoose'


const Schema = mongoose.Schema

const experienceSchema = new Schema ({
  productionTitle: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Film', 'TV', 'Stage', 'Other']
  },
  producingEntity: String,
  director: String,
  year: Number,
},
{timestamps: true}
)

const educationSchema = new Schema ({
  institution: String,
  degree: String,
  major: String,
  graduated: Boolean,
  year: Number,
},
{timestamps: true}
)

const trainingSchema = new Schema ({
  institution: String,
  focus: String,
  teacher: String,
},
{timestamps: true}
)

const talentAccountSchema = new Schema({
  name: String,
  headshot: String,//The POST request that creates the account will set this string to the Cloudify image that they uploaded on sign up
  unionStatus: {
    type: String,
    enum: ['SAG and AEA', 'SAG', 'AEA', 'Not Affiliated'],
    // commented out by Brandon to test cd account creation (causes validation error on records where its blank)
    // required: true
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
  reelLink: String,//href to a youtube video
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
}, {
  timestamps: true,
})

const TalentAccount = mongoose.model('TalentAccount', talentAccountSchema)

export { TalentAccount }
