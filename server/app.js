const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("config");
const initDatabase = require("./startUp/initDatabase");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);
const API_KEY = "9196bd0d6ab62e92bd8c460a1c05cc10";

const PORT = config.get("port") ?? 8080;

// if (process.env.NODE_ENV === "production") {
//    console.log("production");
// } else {
//    console.log("development");
// }

async function start() {
   try {
      //when there is connection to the DB, we check only once, if the all neccesary datas are correct
      mongoose.connection.once("open", () => {
         initDatabase();
      });
      await mongoose.connect(config.get("mongoUri"));
      console.log(chalk.green(`MongoDB connected.`));
      app.listen(PORT, () => {
         console.log(chalk.green(`Server has been started on port ${PORT}...`));
      });
   } catch (e) {
      console.log(chalk.red(e.message));
      process.exit(1); // wich means there was a problem with the connection to the server
   }
}

start();
