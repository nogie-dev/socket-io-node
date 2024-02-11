const express=require("express")
const app=express()
const http=require("http")
const server=http.createServer(app)
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const {User}=require("./models/user")

const PORT=8080
const mongoose=require("mongoose")

const config=require("./config/key")
console.log(config.mongoURI)

mongoose.connect(config.mongoURI,{}).then(()=>console.log("mongodb Connected"))
.catch(err=>console.log(err))

app.get("/",(req,res)=>{
    res.send('<h1>hello</h1>')
})

app.post("/register",async(req,res)=>{
    const user=new User(req.body)
    // user.save((err,userInfo)=>{
    //     if(err) return res.json({success:false,err})
    //     return res.status(200).json({success:true})
    // })

    user.save()
    .then((userInfo)=>{
        return res.status(200).json({success:true})
    }).catch(err=>console.log(err))
    
})

app.listen(3000,()=>{
    console.log,("listening on 3000")    
})