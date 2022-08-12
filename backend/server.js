const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/databse");

// handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to uncaught exception");
  process.exit(1);
});

//setting dotenv file
dotenv.config({ path: "backend/config/config.env" });

//connectde database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server started  on port: ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

// handle unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
