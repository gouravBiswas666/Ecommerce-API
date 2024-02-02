import Product from "../model/productModel.js";

//get all product
export const fetch = async (req, res)=>{

    try {
        
        const product = await Product.find();
        if(product.lenght === 0){
            return res.status(404).json({message: "product not found"});
        }
        res.status(200).json({Products : product});

    } catch (error) {
        res.status(400).json({error : "internal server error"})
    }
}

//create product
export const create = async (req, res)=>{

    try {
        
        const productData = new Product(req.body);
        const {name} = productData;
        const productExist = await Product.findOne({name});

        if(productExist){
            return res.status(400).json({message: "product already exist"});
        }
        const savedProduct = await productData.save();
        res.status(200).json(savedProduct);

    } catch (error) {
        res.status(400).json({error : "internal server error"})        
    }
}

//update product
export const update = async (req,res)=>{

    try {
        const id = req.params.id;
        //console.log(id);
        const productExist = Product.findOne({_id:id});

        if(!productExist){
            return res.status(404).json({message: "product not found"})
        }
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, {new:true});
        res.status(201).json(updateProduct);

    } catch (error) {
        res.status(400).json({error : "internal server error"}) 
    }
}

//delete product
export const deleteProduct = async (req, res)=>{

    try {
        
        const id = req.params.id;
        const productExist = Product.findOne({_id:id});
        if(!productExist){
            return res.status(404).json({message: "product not found"})
        }
        await Product.findByIdAndDelete(id);
        res.status(201).json({message: "product delete"})

    } catch (error) {
        res.status(400).json({error : "internal server error"}) 
    }

}