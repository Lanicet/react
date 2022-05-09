import { Router } from "express";
import cors from "cors";
import samplePosts from "../samples/samplePosts.js";
import corsOptionsDelegate from "../const.js";

const postsRouter = Router();

postsRouter.get(
  "/api/v1/posts/read",
  cors(corsOptionsDelegate),
  async (req, res) => {
    return res.status(200).send(samplePosts);
  }
);

export default postsRouter;
