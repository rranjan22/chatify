// put  "type": "module",  in package.json to use ES6 modules
import express from "express";
import dotenv from "dotenv"; // to use dotenv package
import path from "path"; //we don't need to install path package, it comes with nodejs

import authRoutes from "./routes/auth.route.js"; // import auth routes
import messageRoutes from "./routes/message.route.js"; // import message routes


dotenv.config(); // here we are configuring dotenv (calling the config method from dotenv package)

const PORT = process.env.PORT || 3000; // get port from environment variables or use 3000 as default
//here, if PORT is not defined in .env file, it will use 3000 as default

const app = express();

const __dirname = path.resolve(); // to get the current directory name

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV === "production"){
    // serve static files from the React frontend app. 
    //static files means html, css, js files that are generated after building the react app
    // static files are in the 'dist' folder.
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    //any routes other than the ones defined above(like /api/auth and /api/messages), just send the index.html file
    app.get("*", (_, res) => {
        //here we are not using the req, so we can just put _ instead of req. it is just a convention, keep in mind
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });

    //how is this working:
    //1. express.static middleware will first check if the requested file is present in the 'dist' folder
    //2. if not, it will go to the next route handler which is app.get("*") and send the index.html file
    //3. then react router will take over and handle the routing on the client side

}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));