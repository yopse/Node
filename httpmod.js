const http = require('http');

const app = http.createServer((req,res)=>{
  
     
      
})

//checking if the port is empty

const PORT = process.env.PORT || 3000

app.listen(3000, ()=>{

     console.log('Listening on port 3000')
})