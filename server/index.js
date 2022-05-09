import express from "express";
import pkg from "body-parser";
import postsRouter from "./routes/posts.js";
import commentsRouter from "./routes/comments.js";
import usersRouter from "./routes/users.js";

const { json } = pkg;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(json());
app.use(postsRouter);
app.use(commentsRouter);
app.use(usersRouter);

app.listen(5000, () => {
  console.log("Server listens to port 5000");
});

//EaMCTgy8fmc99MR9
