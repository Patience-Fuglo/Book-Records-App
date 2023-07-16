const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bookRoutes = require("./routes/book.routes");
const userRoutes = require("./routes/user.routes");

app.use(express.json(), express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const server = app.listen(0, () => {
      const port = server.address().port;
      console.log(`🎉Party on port: ${port}`);
    });
  })
  .catch((err) =>
    console.log("Something went wrong when connecting to the database ", err)
  );

app.use("/api/book", bookRoutes);
app.use("/api/user", userRoutes);
