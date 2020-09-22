const mongoose = require("mongoose");
const connectionURL = process.env.MONGODB_URL;

(async function connectToDatabase() {
  try {
    await mongoose.connect(connectionURL, {
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
