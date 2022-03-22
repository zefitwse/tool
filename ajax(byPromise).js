//option的格式
//     let options = {
//         method: "get",
//         url: "http://localhost:8080/test/first",
//         callback: handlerData,
//         data: {
//             name: "hello",
//             age: 99
//         }
//     };
function Ajax(options) {
    // POST AND GET 方式的data的格式转换
    //要判断data是否为对象 ,用typeof a===“”判断,并且不能为空，不能为数组
    if (typeof options.data === "object" && options.data !== null && !(Array.isArray(options.data))) {
        let data = "";
        //拼接
        for (let i in options.data) {
            data += `&${i}=${options.data[i]}`;
        }
        options.data = data.slice(1);
    }
    //GET的拼接；
    if (options.method.toUpperCase()===`GET`){
        options.url += `?${options.data}`;
    }
    let xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url);
    // 设置对应的请求头
    if (options.method.toUpperCase() === `POST`) {
        xhr.setRequestHeader("content-type", "application/x-www-from-urlencoded");
        xhr.send(options.data);
    } else {
        xhr.send("null");
    }
    // 加载,创建一个promise对象
    return new Promise((res , rej)=>{
        xhr.onload = function () {
        if (xhr.status === 200) {
            // 改变p1的状态，将数据送给then
            res(xhr.responseText);
        }else {
            console.log(rej);
        }
    }})

}
let p1= Ajax();
p1.then( function success() {

    },
        function fail(){

        });