import dotenv from "dotenv";
dotenv.config();

import express from "express";
import exphbs from "express-handlebars";

import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (app) => {
  // settings
  app.set("port", process.env.PORT || 80);
  app.set("views", path.join(__dirname, "views"));

  const hbs = new exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: import("./lib/handlebars.js")
  });

  app.engine("handlebars", hbs.engine)
  app.set("view engine", "handlebars")
};
