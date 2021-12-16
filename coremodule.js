// const path = require('path');

// dirname

// console.log('File name: ', path.basename(__dirname));

//filename

// console.log('File name: ', path.basename(__filename));

// Extension

//console.log('Ext name: ', path.basename(__filename));


//parse all // All information of the file in detail

// console.log('Parse: ', path.parse(__filename))

//join

//Joins folders with Folders + + +

// console.log('Join: ', path.join(__dirname, 'order','app.js'))

//File system

const fs = require('fs');
const path = require('path');

//Making a directory

// fs.mkdir(path.join(__dirname,'/test'), (err)=>{

//       if(err) 
//        {
//        console.log("Something went wrong")
//        return
//        }

//        console.log("Folder created");


// })

//create a file

  fs.writeFile(path.join(__dirname,'test', 'text.txt'),"hello node",(err)=>{

      if(err)
      {

         throw arr;
      }

      fs.appendFile(path.join(__dirname,'test','text.txt'),'Hey node two', (err)=>{
          
         if(err)
         {
              console.log("there is error");
         }
         
         console.log("Successfully added");

      })

      console.log("file created...");

  })


