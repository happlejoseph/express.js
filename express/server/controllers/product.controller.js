

import Product from '../model/product.js'

// add product //
export const addProducts = async(req, res, next)=> {

    try {

        const {name, des, price} = req.body

        if(!name || !des || !price) {
            return res.status(400).json({
                message: 'all field required'
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

        res.status(500).json({
            message: err.message
        })
        
    }
}



// get product //
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

        res.status(500).json({
            message: err.message
        })
        
    }
}



// get single product //
export const singleProduct = async(req, res, next)=> {

    try {

        const {id} = req.body

        if(!id) {
            return res.status(400).json({
                message:'id required'
            })
        }

        const product = await Product.findById(id)
        if(!product) {
            return res.status(400).json({
                message: 'product not found'
            })
        }
        else {
            res.status(200).json({
                status: true,
                message: 'successful',
                data: product
            })
        }

    }
    catch(err) {
        console.log(err);

        res.status(500).json({
            message: err.message
        })
        
    }
}