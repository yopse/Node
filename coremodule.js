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

// const fs = require('fs');
// const path = require('path');

// //Making a directory

// fs.mkdir(path.join(__dirname,'/test'), (err)=>{

//       if(err) 
//        {
//        console.log("Something went wrong")
//        return
//        }

//        console.log("Folder created");


// })

//create a file

//   fs.writeFile(path.join(__dirname,'test', 'text.txt'),"hello node",(err)=>{

//       if(err)
//       {

//          throw arr;
//       }
// append data
//       fs.appendFile(path.join(__dirname,'test','text.txt'),'Hey node two', (err)=>{
          
//          if(err)
//          {
//               console.log("there is error");
//          }
         
//          console.log("Successfully added");

//       })

//       console.log("file created...");

//   })




// fs.readFile(path.join(__dirname,'test','text.txt'),(err, data)=>{

//      if(err) {

//          throw err
//      }

//      console.log(data.toString());


// });


//Os module

// const os = require('os');

// console.log('Os type: ', os.type());

//os platform

// console.log("Os platform :", os.platform() );

// for the cpu architecture

// console.log("cpu arch :", os.arch());

// for free memory

// console.log('free memory :', os.freemem())

// //Total mem
// console.log('free memory :', os.totalmem())

// uptime for start

// console.log("uptime : ", os.uptime());


//Events module

const Emitter = require('events');

// const myEmitter = new Emitter();

// myEmitter.on('somename',(data)=>{

//     console.log(data);  
// })


// myEmitter.emit('somename',{

//     name: 'Archish'
// });

// class Auth extends Emitter{
    
//     register(username){
//      console.log('Registered successully');

//      this.emit('registered', username);
//    }
// }


// const auth = new Auth();

// //listen

// auth.on('registered',(data)=>{
    
//    console.log(`Sending email to ${data}`)
// })

// auth.register('codershouse');


