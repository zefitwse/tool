function setCookie(name ,value , item={}){
    //判断是否存在expires,有则加上天数num作为期限；
    if(item.expires){
        let d=new Date();
        d.setDate(d.getDate()+options.expires);
        options.expires=d;
    }
    // 拼接cookie字符串
    let cookie_string=[
        name,
        "=",
        value,
        options.path ? `;path=${options.path}`:``,
        options.expires? `;expires=${options.expires}`:``
    ].join("");
    document.cookie=cookie_string;
}
setCookie("","",{path:"",expires:num});