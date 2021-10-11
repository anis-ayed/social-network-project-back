const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@localhost:27017/social-network-bd`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
