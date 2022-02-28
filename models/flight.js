import mongoose from "mongoose";
//optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema ({
  airline: {
    type:String,
    enum: ['American', 'Southwest', 'United'],
    required: true
  },
  airport: {
    type:String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    required: true
  },
  flightNo: {
  type: Number,
  required: true,
  min: 10,
  max: 9999
}, 
  departs: Date
})

//compile the schema into a model and expor it
const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}