import express from "express";
import cors from "cors";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";

import router from "./routes/index.js";

const app = express();

const corsOrigin = {
  origin: "http://localhost:3000", //frontend port
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  })
);
app.use(cors(corsOrigin));
app.use(
  morgan(
    `[:date[clf]] :method :url :status :response-time ms - :res[content-length]`
  )
);
app.use("/api", router);

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
