let p=new Promise((res,rej)=>{
    function a(){

    }
})
//使用async代替then
async function fun1(){
    let data=await p;
    return "数据";
}
//这里不用asycn是因为相对于写一个asycn函数而言，then较为简洁；
let p2=fun1();
p2.then(function (res){

})