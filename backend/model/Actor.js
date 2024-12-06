import mongoose, { model, Schema } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    birthDate: {
      type: Date,
    },
    biography: {
      type: String,
    },
    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Actor = mongoose.models.Actor || model("Actor", schema);
