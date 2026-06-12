

// const http = require('http')

// const server = http.createServer((req,res)=> {
//     res.write('helo')
//     res.end()
// })

const express = require('express');

const app = express()

const PORT = 3000

// basic rout //
// app.get('/',(req,res)=> {
//     res.send('helo express.js')
// })



// crud //
// app.get('/about',(req,res)=> {
//     res.send('about page')
// })

// app.get('/contact',(req,res)=> {
//     res.send('contact page')
// })

// app.post('/addUser',(req,res)=> {
//     res.send('user added')
// })

// app.put('/editUser',(req,res)=> {
//     res.send('user updated')
// })

// app.delete('/deleteUser',(req,res)=> {
//     res.send('user deleted')
// })

// app.listen(PORT, ()=> {
    
//     console.log(`server i numming on port ${PORT}`);
    
// })


// 1. Request method //

// A. req.params //
// app.get('/user/:id',(req,res)=> {
//     res.send(req.params.id)
// });

// B. req.query //
// app.get('/search',(req,res)=> {
//     res.send(req.query.name)
    
// });

// C. req.body //
// app.use(express.json())
// app.post('/user',(req,res)=> {
//     console.log(req.body);
    
// });

// D. req.mthod //
// app.get('/search',(req,res)=> {
//     res.send(req.method)
// })

// E. req.url //
// app.get('search',(req,res)=> {
//     res.send(req.url)
// })

// F. req.header
// app.get('/search',(req,res)=> {
//     res.send(req.url)
// })


// RESPONCE //

// A. res.send()
// app.get('/',(req,res)=> {
//     res.send('helo')
// })


// B. res.json() //
// app.get('/user',(req,res)=> {
//     res.json({
//         name: 'jeff',
//         age: 20
//     });
// });

// C. res.status() //

// app.get('/user',(req,res)=> {

//     res.status(200).send('success');
    
// });

// app.get('/',(req,res)=>{
//     res.status(200).send('success')
// })

// D. res.dentFile() //
// const path = require('path');
// app.get('/',(req,res)=> {
//     res.sendFile(path.join(__dirname, 'index.html'))
// })

// E. res.redirect() //
// app.get('/home',(req,res)=> {
//     res.redirect('/about');
// });

// app.get('/about',(req,res)=>{
//     res.send('about page')
// })

// F. res.end()
// app.get('/',(req,res)=> {
//     res.write('helo')
//     res.end();
// })


// GET MOTHED //
// app.get('/users',(req,res)=> {
//     res.json([
//         {id: 1, name: 'jeff'},
//         {id: 2, name: 'tom'}
//     ])
// })


// POST METHOD //
// app.use(express.json())

// app.post('/users',(req,res)=> {

//     const user = req.body;
//     console.log(user);

//     res.status(201).json({
//         message: 'user added'
//     });
    
// });


// PUT METHOD //
// app.use(express.json());

// app.put('/users/:id', (req,res)=> {

//     const id = req.params.id;
//     const updateData = req.body;

//     res.json({
//         message: 'user updated',
//         id,
//         updateData
//     });
// });


// DELETE METHOD //
// app.delete('/users/:id', (req,res)=> {

//     const id = req.params.id;

//     res.json({
//         message: 'user deleted',
//         id
//     });
// });




// MIDDLEWARW //
// const myMiddleware = (req,res,next)=> {
//     console.log('middleware exxcuted');

//     next();
    
// };

// app.get('/',myMiddleware,(req,res)=> {
//     res.send('welcome');
// });



// APPLICATION LEVEL MIDDLEWARE //
// const logger = (req,res,next)=> {
//     console.log('URL:', req.url);
//     console.log('Method:', req.method);
    
//     next();
// }

// app.use(logger)

// app.get('/',(req,res)=> {
//     res.send('welcome to home page')
// });

// app.get('/about',(req,res)=> {
//     res.send('welcome to about page')
// });



// AUTHORIZED METHOD //
const auth = (req,res,next)=> {

    const token = req.headers.token;

    if(token === '123456') {
        
        next()
    }
    else {
        res.status(401).send('unauthorized')
    }

}

app.get('/profile', auth, (req,res)=> {

        res.send('welcome user')
    });


app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`);
    
})