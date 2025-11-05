import express from "express";
import layouts from "express-ejs-layouts";
import homeController from "./controllers/homeController.js";
import errorController from "./controllers/errorController.js";
import subscribersRouter from "./routes/subscribers.js";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

/* ------------------------------------------------------------------ */
/* Setup paths and Express app */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

/* ------------------------------------------------------------------ */
/* MongoDB connection */
const { MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI, { dbName: "confetti_cuisine" })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

/* ------------------------------------------------------------------ */
/* Express configuration */
app.set("view engine", "ejs");
app.set("port", PORT);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(layouts);
app.use(express.static(path.join(__dirname, "public")));

/* ------------------------------------------------------------------ */
/* Routes */
app.get("/", (req, res) => res.render("index"));
app.get("/courses", homeController.showCourses);

// Redirect old contact page to new subscriber form
app.get("/contact", (req, res) => res.redirect("/subscribers/new"));

// Subscribers routes
app.use("/subscribers", subscribersRouter);

/* ------------------------------------------------------------------ */
/* Error handlers */
app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

/* ------------------------------------------------------------------ */
/* Start server */
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
