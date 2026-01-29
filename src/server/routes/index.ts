import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (_, res) => {
  res.send("Servidor ligado!");
});

router.post("/test", (req, res) => {
  //console.log(req.body);
  res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { router };
