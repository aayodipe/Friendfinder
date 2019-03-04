const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path')






app.listen(PORT, ()=>{
     console.log(`Server listen to port ${PORT}`)
})

