

import Product from '../model/product.js'

// add product //
export const addProducts = async(req, res, next)=> {

    try {

        const {name, des, price, image} = req.body

        if(!name || !des || !price || !image) {
            return res.status(400).json({
                message: 'all field required'
            })
        }

        if(req.file && req.file.filename) {
            newProducts.image = req.file.filename
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



// edit & update //
export const updateProduct = async(req, res, next)=> {

    try {

        const {id, name, des, price} = req.body

        if(!id) {
            return res.status(400).json({
                message: 'id is required'
            })
        }

        const product = await Product.findById(id)
            if(!product) {
                return res.status(400).json({
                    message: 'product not found'
                })
            }

        const updateData = {}
        
        if(name) updateData.name = name
        if(des) updateData.des = des
        if(price) updateData.price = price

        const updatedProduct = await Product.findByIdAndUpdate(id, updateData,{
            new: true,
        })

        res.status(200).json({
            status: true,
            message: 'successful',
            data: updatedProduct
        })

    }
    catch(err) {
        console.log(err);

        res.status(500).json({
            message: err.message
        })
        
    }
}



// delete //
export const deleteProduct = async(req, res, next)=> {

    try {

        const {id} = req.body

        if(!id) {
            return res.status(400).json({
                message: 'id is required'
            })
        }

        const deletedProduct = await Product.findByIdAndDelete(id)

        if(!deleteProduct) {
            return res.status(404).json({
                message: 'product not found'
            })
        }
            res.status(200).json({
                status: true,
                message: 'successful',
                data: deletedProduct
            })
    }
    catch(err) {
        console.log(err);

        res.status(500).json({
            message: err.message
        })
        
    }
}