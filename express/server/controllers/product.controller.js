

import Product from '../model/product.js'


export const addProducts = async(req, res, next)=> {

    try {

        const {name, des, price} = req.body

        if(!name) {
            return res.status(400).json({
                message: 'name is requireed'
            })
        }
        else {
            const newProducts = new Product({
                name, des, price
            })

            const saveProducts = await newProducts.save()
            res.status(200).json({
                status: true,
                message: 'successful',
                data: saveProducts
            })
        }
        
    }
    catch(err) {
        console.log(err);
        
    }
}


export const getProduct = async(req, res, next)=> {

    try{

        const getProduct = await Product.find()
        res.status(200).json({
            status: true,
            message: 'successful',
            data: getProduct
        })

    }
    catch(err) {
        console.log(err);
        
    }
}



export const getProduct = async(req, res, next)=> {
    try {

        const listProduct = await Product.find();
        res.status(200).json({
            status: true,
            message: 'successful',
            data: listProduct
        })
    }
    catch(err) {
        console.log(err);
        
    }
}