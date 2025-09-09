import { connectToDatabase } from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  return res.status(200).json({ token, userId: user._id, name: user.name });
}
