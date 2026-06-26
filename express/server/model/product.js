import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    des: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user','admin','manager']
    }
}, {timestamps:true})

const Product = mongoose.model('productData',productSchema)

export default Product