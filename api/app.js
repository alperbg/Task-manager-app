const express = require('express');
const app = express();


app.get('/',(req,res) => {
    req.send('Hello World');
})


app.listen(3000, () => {
    console.log('server is listening on port 3000');
})