

import express from 'express'
import session from 'express-session'

const app = express()


app.use(session( {
    secret:"secretkey123",
    resave:false,
    saveUninitialized:false
}))

app.get('/login', (req, res)=> {
    req.session.user = {
        id: 1,
        name: "jeff",
        age: 20
    }
    res.send('login successful')
})

app.get('/profile', (req, res)=> {
    if(req.session.user) {
        res.json(req.session.user)
    }
    else {
        res.send('not login')
    }
})

app.listen(3000,()=> {
    console.log('server is running');
    
})