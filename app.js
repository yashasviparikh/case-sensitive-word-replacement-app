const express = require("express");
const app = express();
const bodyParser = require("body-parser")
//Swagger
fs = require('fs');//swagger
const swaggerUi = require('swagger-ui-express');//swagger
const swaggerDocument = require('./swagger.json');//swagger
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));//swagger

app.use(bodyParser.json());
app.listen(process.env.PORT || 3000, function(){
  console.log("server is running");
})

  app.use(bodyParser.urlencoded({
    extended:true
}));
  
app.get('/',(req,res)=>{
  res.redirect('/api-docs');
});
app.post("/", function(req, res) {
   
  var stringWordReplace = String(req.body.stringWordReplace); 
  const arr = ["Oracle","Google", "Microsoft" , "Amazon" , "Deloitte"];
  var str = stringWordReplace.split(" ");
  for(let i=0; i <str.length;i++)
  {
    for(var j=0;j <arr.length;j++)
    {
      if(str[i]===arr[j])
      {
        str[i]=str[i]+'©';
        break;
      }
    }
  }
  const result = str.join(' ');
  res.send(result); 
});
  
