const express= require('express');
const port = process.env.PORT;
const app = express();
app.use('/', (req,resp)=>{
    resp.send('Welcome to AGH!');
}
);
app.listen(port, ()=>{ console.log('App is running on port', port)})  
