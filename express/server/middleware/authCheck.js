
import User from '../model/user.js';
import jwt from 'jsonwebtoken'

export const authCheck = async(req, res, next)=> {
    
    if(req.method === 'OPTIONS') {
        return next()
    }
    else {

        try {

            const token = req.headers.authorization.split(' ') [1];
            if(!token) {
                return res.status(400).json({
                    message: 'authorization failed'
                })
            }
            else {

                const decodedToken = jwt.verify(token, process.env.JWT_SCERET)

                const validUser = await User.findOne({_id: decodedToken.userId})
                return res.status(200).json({
                    message:'valied user'
                });

                if(!validUser) {
                    return res.status(400).json({
                        message:'invalid user'
                    });
                }
                else {
                    req.userDetails = {userId: decodedToken.userId, userRole: decodedToken.userRole}
                    next()
                }
            }
        }
        catch(err) {
            console.log('authorization fail');
            
        }
    }
}