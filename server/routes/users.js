import { Router } from "express";
import cors from "cors";
import sampleUsers from "../samples/sampleUsers.js";
import corsOptionsDelegate from "../const.js";

const usersRouter = Router();

usersRouter.get(
  "/api/v1/users/read",
  cors(corsOptionsDelegate),
  async (req, res) => {
    return res.status(200).send(sampleUsers);
  }
);

export default usersRouter;
