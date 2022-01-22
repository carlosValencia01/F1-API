const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database online");
  } catch (error) {
    console.log("dbConnection error: ", error);
    throw new Error("Error trying to start database");
  }
};

module.exports = {
  dbConnection,
};
