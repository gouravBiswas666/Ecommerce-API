import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/productRoutes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL || "mongodb+srv://gourav666:ninja666@ecommerce-api.ziwditt.mongodb.net/products?retryWrites=true&w=majority";



    mongoose.connect(MONGOURL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(()=>{
        console.log("connected to database successfully");
      }).catch((err)=>console.log("no connection ",err))





    //  const db = mongoose.connection;
    //  db.on("error",console.error.bind(console,"Error while connecting to mongiDB Atlas"));
    //  db.once("open",function() {
    //  })


app.listen(PORT, function name(err) {
    if (err) {
        console.log("Error", err);
        return;
    }
    console.log(`server is running on port: ${PORT}`);
    return;
})


app.use("/", route);
app.use("/products", route);