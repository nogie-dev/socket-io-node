const express=require("express")
const app=express()
const http=require("http")
const server=http.createServer(app)
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const {User}=require("./models/user")

const PORT=8080

const config=require("./config/key")

.catch(err=>console.log(err))

app.get("/",(req,res)=>{
    res.send('<h1>hello</h1>')
})

app.post("/register",async(req,res)=>{
    const user=new User(req.body)
})

app.listen(3000,()=>{
    console.log,("listening on 3000")    
})