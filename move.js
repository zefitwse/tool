// 实现元素移动
function move(target, dom, attr) {
    //目的地
    var target = target;
    //获取dom元素的现在的位置
    var now = parseInt(getComputedStyle(dom)[attr]);
    //缓慢移动速度或者称步长；
    var speed = (target - now) / 10;
    // 速度取整；
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
    clearInterval(t);

    // 30ms执行一次
    var t = setInterval( function domChange() {
        now += speed;
        dom.style[attr] = now + "px";
        if (Math.abs(target-now)<=Math.abs(speed)) {
            dom.style[attr]=target+'px';
            clearInterval(t);
        }
    }, 30)
}

