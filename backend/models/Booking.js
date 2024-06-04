import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
    },
    tourName: {
        type: String,
        required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize:{
        type:Number,
        requires:true
    },
    phone:{
        type:Number,
        requires:true
    },
    bookAt:{
        type:Date,
        // requires:true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);