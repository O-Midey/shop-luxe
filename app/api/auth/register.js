import { connectToDatabase } from "../../../lib/mongodb";
import User from "../../../models/User";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return res
    .status(201)
    .json({ message: "User registered successfully", userId: user._id });
}
