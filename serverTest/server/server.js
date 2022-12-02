const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send('Okay Lets go')
})

app.listen(PORT,()=> {
    console.log("Server on: http:/localhost:${PORT}/");
})