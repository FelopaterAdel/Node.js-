const mongoose=require('mongoose')

const usersSchema=mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
   email:{
    type:String,
    required:true,
    unique:true,
    validate:{
        validator:function(v){
            return /^[a-zA-Z]{3,10}(@)(gmail|yahoo)(.com)$/.test(v)
        },
        message:()=>"email is not valid"
    }
   } ,
   password:{
    type:String,
    required:true,
   }
})

const userModel=mongoose.model('User',usersSchema)
module.exports=userModel