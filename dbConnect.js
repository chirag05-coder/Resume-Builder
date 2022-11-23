const mongoose= require('mongoose')

const URL='mongodb+srv://chirag:Chirag2000@cluster0.hmcdfhx.mongodb.net/resume1'

mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})

const connection= mongoose.connection

connection.on('connected',()=>{
    console.log('Mongo DB Connection Sucessful');
})

connection.on('error',(error)=>{
     console.log(error);
})