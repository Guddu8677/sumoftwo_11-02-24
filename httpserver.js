const  express = require('express');

function sumofTwonumber(a , b){
  return a + b;

}


const app =  express();
const port = 2000;

app.get("/q" , function(req , res){
    const a = req.query.a;
    const b = req.query.b;

   const ans = sumofTwonumber(Number(a) ,Number(b));
    res.send(String(ans));
});

app.listen(port , function(){

    console.log(`listen port ${port}`);
});