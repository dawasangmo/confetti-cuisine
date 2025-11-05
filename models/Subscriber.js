// models/Subscriber.js
import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    zipCode: {
      type: Number,
      required: true
    },
    streetAddress: {
      type: String,
      required: true,
      trim: true
    },
    vip: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Subscriber = mongoose.model("Subscriber", subscriberSchema);
export default Subscriber;
