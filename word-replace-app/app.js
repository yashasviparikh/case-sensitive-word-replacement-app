const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// import library and files
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
// let express to use this
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));
app.UseSwagger();
            app.UseStaticFiles();
            app.UseSwaggerUI(c =>
              {
                  c.SwaggerEndpoint("./swagger/v1/swagger.json", "My API V1");
                  //c.RoutePrefix = string.Empty;
              });
app.use(bodyParser.json());
app.listen(3000, function(){//replace 3000 with what rishav shared before pushing into heroku
  console.log("server is running on port 3000");
})

  app.use(bodyParser.urlencoded({
    extended:true
}));
app.get('/',(req,res)=>{//swagger
  res.redirect('api-docs');
});
app.post("/", function(req, res) {
   
  const stringWordReplace = String(req.body.stringWordReplace); 
  const arr = ["Oracle","Google", "Microsoft" , "Amazon" , "Deloitte"];
  const str = stringWordReplace.split(" ");
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
  
