let express=require("express");
let app = express();
let port=3000;

app.use(express.static('public'));
//编辑路由
app.get("/",(req,res)=>{
    res.send("hello")
});
app.listen(port ,()=>{
    console.log("开启",'ccccccccccccc');
});