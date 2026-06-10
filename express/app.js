

// const http = require('http')

// const server = http.createServer((req,res)=> {
//     res.write('helo')
//     res.end()
// })

const express = require('express');

const app = express()

const PORT = 5000

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
app.get('/user/:id',(req,res)=> {
    res.send(req.params.id)
});

// B. req.query //
app.get('/search',(req,res)=> {
    res.send(req.query.name)
    
});

// C. req.body //
app.use(express.json())
app.post('/user',(req,res)=> {
    console.log(req.body);
    
});

// D. req.mthod //
app.get('/search',(req,res)=> {
    res.send(req.method)
})

// E. req.url //
app.get('search',(req,res)=> {
    res.send(req.url)
})

// F. req.header
app.get('/search',(req,res)=> {
    res.send(req.url)
})

app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`);
    
})