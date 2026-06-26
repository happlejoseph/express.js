

import jwt from 'jsonwebtoken'

const authCheck = async (req, res, next) => {

    try {
        console.log("dataa");

        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Authorization token missing' });
        }
        const decodedToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        console.log(decodedToken);
        

        req.user = decodedToken;
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(401).json({
            message: 'unauthorized'
        })

    }
}

export default authCheck