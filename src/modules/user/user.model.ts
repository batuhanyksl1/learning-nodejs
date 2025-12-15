import mongoose, { Schema } from "mongoose";
import type { IUser } from "./user.types";

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model<IUser>("User", UserSchema);
