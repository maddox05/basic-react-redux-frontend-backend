import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const max = req.query?.max ? req.query?.max : 10000;
  res.status(200).json({ randomNumber: Math.round(Math.random() * max) });
});

export default router;
