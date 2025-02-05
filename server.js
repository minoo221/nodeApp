const express = require("express");
const connectDB = require("../config/db");
const itemRoutes = require("./routes/itemRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api/items", itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
