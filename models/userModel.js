const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    Portfolio: {
      type: String,
      default: "",
    },
    carrierObjective: {
      type: String,
      default: "",
    },
    MobileNumber: {
      type: String,
      default:''
    },
    Address: {
      type: String,
      default: "",
    },
    
    education: { type: Array, default:[] },
    skill: { type: Array, default: [] },
    experience: { type: Array, default: [] },
    projects: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
