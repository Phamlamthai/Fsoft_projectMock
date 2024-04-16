import { createRouter } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/db";
import { validateEmail } from "@/utils/validation";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { createActivationToken } from "@/utils/tokens";
import { sendEmail } from "@/utils/sendEmails";
import { activateEmailTemplate } from "@/emails/activeEmailTemplate";

const handler = createRouter();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await db.connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields." });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email." });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "This Email already exists." });
    }
    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters.",
      });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    const newUsers = new User({ name, email, password: cryptedPassword });
    const addedUsers = await newUsers.save();
    const activation_token = createActivationToken({
      id: addedUsers._id.toString(),
    });
    const url = `${process.env.BASE_URL}/activate/${activation_token}`;
    sendEmail(email, url, "", "Activate your account.", activateEmailTemplate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
