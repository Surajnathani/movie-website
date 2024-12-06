import mongoose from "mongoose";

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "Appointment" })
    .then((data) => {
      console.log(`connect to DB: ${data.connection.host}`);
    })
    .catch((error) => {
      throw error;
    });
};

export { connectDB };
