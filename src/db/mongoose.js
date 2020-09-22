const mongoose = require("mongoose");

(async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    return console.log("Connected to database");
  } catch (error) {
    return console.log("Unable to connect", error);
  }
})();
