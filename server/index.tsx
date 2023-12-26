const Express = require("express");
const app = Express();


app.get("/signup",(req,resp)=>{
    resp.send(`<h1>Hello World!</h1>`);
})


app.listen(5000,()=>{
    console.log("Server is running at http://localhost:5000")
})