import express from "express";
import data from "./data.json" assert { type: "json" };

const PORT = process.env.PORT || 3333;
const app = express();

app.get("/api/data/:index", (req, res) => {
  const index = req.params["index"];
  const foundData = data[parseInt(index)];
  if (foundData) {
    res.json(foundData);
  } else {
    res.status(404).json({
      error: "Not Found",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
