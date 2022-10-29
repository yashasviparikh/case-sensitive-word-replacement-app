const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.listen(3000, function(){
  console.log("server is running on port 3000");
})

  app.use(bodyParser.urlencoded({
    extended:true
}));
  
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
  
