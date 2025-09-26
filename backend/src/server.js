// put  "type": "module",  in package.json to use ES6 modules
import express from "express";
import dotenv from "dotenv"; // to use dotenv package

import authRoutes from "./routes/auth.route.js"; // import auth routes
import messageRoutes from "./routes/message.route.js"; // import message routes

dotenv.config(); // here we are configuring dotenv (calling the config method from dotenv package)

const PORT = process.env.PORT || 3000; // get port from environment variables or use 3000 as default
//here, if PORT is not defined in .env file, it will use 3000 as default

const app = express();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));