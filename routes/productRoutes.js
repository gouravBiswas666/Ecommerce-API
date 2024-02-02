import express from "express";
import { create, deleteProduct, fetch, update } from "../controller/productController.js";

const route = express.Router();

route.get("/", fetch);
route.post("/create", create);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteProduct);

export default route;