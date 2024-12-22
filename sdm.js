const express = require("express")
const app = express()
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.set("view engine" ,"ejs")
const tasks=[];

app.get ("/",function (req,res){
    res.render("index")
})
app.get("/tasks",function(req,res){
    res.render("tasks",{tasks})
})

app.post("/task",function (req,res){
    const newTask= req.body.task
    tasks.push(newTask)
    console.log(newTask)
    res.redirect("/")

})





app.listen(9000)