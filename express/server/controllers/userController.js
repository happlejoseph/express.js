

import bcrypt from 'bcrypt'
import user from '../model/user.js'
import jwt from 'jsonwebtoken'



export const Register = async(req, res, next)=> {

    try {
        const {name, email, phone, password} = req.body

        if(!email) {
            return res.status(400).json({
                message: 'email is required'
            })
        }

        const existingemail = await User.find({email})

        if(existingemail) {
            console.log('user already exists');   
        }

        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({name, email, phone, password:hash})
        const saveUser = await newUser.save()

        res.status(200).json({
            status: true,
            message: 'successful',
            data: saveUser
        })
    }
    catch(err) {
        console.log('err',err);
        
    }
}


export const login = async(req, res, next)=> {

    try{
        const {email, password} = req.body

        if(!email) {
            console.log('email is required');
        }
        else {
            const user = await User.findOne({email})

            if(!user) {
                console.log('invalid email');
            }
            
            if(isPassword) {

                const token = jwt.sign(
                    {userId:user._id, userEmail:user.email},
                    process.env.JWT_SECRET,
                    {expiresIn:process.env.JWT_TOKEN_EXPIRY}
                );

                res.status(200).json({
                    status: true,
                    message: 'successful',
                    data: null,
                    result: user,
                    access_token: token
                })
            }
        }
    }
    catch(err) {
        console.log('err');
        
    }
}