// document.onclick = () => {
//     let options = {
//         method: "get",
//         url: "http://localhost:8080/test/first",
//         callback: handlerData,
//         data: {
//             name: "hello",
//             age: 99            
//         }
//     };
//     Ajax(options);
//
//     function handlerData(res) {
//         //    对数据经行处理
//     }
// }
function Ajax(options) {
    // POST AND GET 方式的data的格式转换
    //要判断data是否为对象 ,用typeof a===“”判断,并且不能为空，不能为数组
    if (typeof options.data === "object" && options.data !== null && (Array.isArray(options.data) === false)) {
        let data = "";
        //拼接
        for (let item in options.data) {
            data += `&${item}=${options.data[item]}`;
        }
        options.data = data.slice(1);
    }
    //GET的拼接；
    if (options.method.toUpperCase() === "GET") {
        options.url += `?${options.data}`;
    }
    let xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url);
    // 设置对应的请求头
    if (options.method.toUpperCase() === "POST") {
        xhr.setRequestHeader("content-type", "application/x-www-from-urlencoded");
        xhr.send(options.data);
    } else {
        xhr.send("null");
    }
    // 加载
    xhr.onload = function () {
        if (xhr.status === 200) {
            // 将数据送给回调函数
            options.callback(xhr.responseText);
        }
    }
}
