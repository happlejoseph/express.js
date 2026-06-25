

import jwt from 'jsonwebtoken'

const authCheck = async(req, res, next)=> {

    try {

        const token = req.headers.authorization.split(' ') [1]

        const decodedToken = jwt.verify(
            token,
            process.env.JWT_SCERET
        );

        req.user = decodedToken;
        next();
    }
    catch(err) {
        console.log(err);
        return res.status(401).json({
            message:'unauthorized'
        })
        
    }
}

export default authCheck