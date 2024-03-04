const mongoose = require("mongoose");

try {
  mongoose
    .connect("mongodb://localhost:27017/developer_test")
    .then(console.log("Database connection established"))
    .catch((err) => console.log(err));
} catch (error) {
  console.error(error);
}
