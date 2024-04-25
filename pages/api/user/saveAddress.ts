import { createRouter } from "next-connect";

import { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/db";

import User from "@/models/User";
import auth from "@/middleware/auth";

const router = createRouter<NextApiRequest, NextApiResponse>().use(auth);

router.post(async (req, res) => {
  try {
    db.connectDb();
    const { address } = req.body;
    console.log("address:", address);

    const user = User.findById(req.user);
    await user.updateOne({
      $push: {
        address: address,
      },
    });
    db.disconnectDb();
    return res.json({ addresses: user.address });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router.handler({
  onError: (err, req, event) => {
    console.error(err.stack);
  },
});
