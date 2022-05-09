import { Router } from "express";
import cors from "cors";
import sampleComments from "../samples/sampleComments.js";
import corsOptionsDelegate from "../const.js";

const commentsRouter = Router();

commentsRouter.get(
  "/api/v1/comments/read",
  cors(corsOptionsDelegate),
  async (req, res) => {
    return res.status(200).send(JSON.stringify(sampleComments));
  }
);

export default commentsRouter;
