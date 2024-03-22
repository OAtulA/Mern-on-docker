import exprsess from "express";
import mongoose from "mongoose";
import cors from "cors";

let app = exprsess();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello Basic server running");
});
app.get("/api/users", (req, res) => {
    res.send("Hello Users maje lo");
});

async function connectToMongo() {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
}

connectToMongo();

let PORT = process.env.PORT ||3001;
app.listen(3001, () => {
    console.log("Server is running on", `http://localhost:${PORT}`);
});