import mongoose from "mongoose"

const SchemeSchema = new mongoose.Schema({

  slug: {type: String, required: true},
  name: {type: String, required: true},
  description:{type: String, required: true},
  ministry:{type: String, required: true},
  department: {type: String, required: true},
  state: {type: String, required: true},
  category: {type: String, required: true},
  beneficiary_type: {type: String, required: true},
  benefits: {type: String, required: true},
  eligibility_text: {type: String, required: true},
  application_process: {type: String, required: true},
  documents_required: {type: String, required: true},
  apply_url: {type: String, required: true},
  official_url: {type: String, required: true},
  eligibility_age_min:{type: Number},
  eligibility_age_max: {type: Number},
  eligibility_gender: {type: String, required: true},
  eligibility_caste: {type: String, required: true},
  eligibility_income_max:{type: Number},
  eligibility_residence: {type: String, required: true},
  eligibility_state: {type: String, required: true},
  eligibility_disability: {type: Boolean, required: true},
  eligibility_bpl: {type: Boolean, required: true},

})

const Scheme = mongoose.models.schemes || mongoose.model("schemes",SchemeSchema,"schemes")

export default Scheme