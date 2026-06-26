

import bcrypt from 'bcrypt'
import user from '../model/user.js'
import jwt from 'jsonwebtoken'
import User from '../model/user.js'


// register
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



//login
export const login = async(req, res, next)=> {

    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({
                status: false,
                message: 'Email is required'
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                status: false,
                message: 'Invalid email'
            });
        }

        const isPassword = await bcrypt.compare(
            req.body.password, user.password
        );

        if (!isPassword) {
            return res.status(401).json({
                status: false,
                message: 'Invalid password'
            });
        }

        const token = jwt.sign(
            {
                userId: user._id,
                userEmail: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_TOKEN_EXPIRY
            }
        );

        return res.status(200).json({
            status: true,
            message: 'Successful',
            data: null,
            result: user,
            access_token: token
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            status: false,
            message: 'Internal Server Error'
        });
    }

}