let router=require("express").Router();

router.get('/',function (req,res,next){
    res.send("成功");
});

router.get('/ejs',function (req,res,next){
    res.render('test',{title:"哈哈哈哈"});
});
module.exports = router;