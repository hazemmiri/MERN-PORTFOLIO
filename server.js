const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// dotenv configuartion
dotenv.config();

// res object
const app = express();

// midlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get("/", (req, res) => {
  res.send("<h1>Welcom To Node Server</h1>");
});

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`server Running On PORT ${PORT} `);
});
