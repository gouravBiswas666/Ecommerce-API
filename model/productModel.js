import mongoose from "mongoose";

const productScheme = mongoose.Schema({

    name: {
        type : String,
        required: true
    },
    quantity: {
        type : Number,
        required: true
    }
},{timestamps:true});

export default mongoose.model("product",productScheme);


