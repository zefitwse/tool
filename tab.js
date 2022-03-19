window.addEventListener("load",function (){
    function Tab(){
        this.init();
    }

    Tab.prototype.getEle=function(){
        this.btns = document.querySelectorAll("button");
        this.contents = document.querySelectorAll(".body div");
    };
    Tab.prototype.bindEvent=function(){
        for (var i = 0; i <this.btns.length; i++) {
            this.btns[i].addEventListener("mouseenter", this.changeContent.bind(this,this.btns[i]));
        }
    };
    Tab.prototype.changeContent=function(dom){
        this.remove();
        dom.classList.add("active");
        this.contents[dom.i].classList.add("active");
    };
    Tab.prototype.remove=function(){
        for (var i=0;i<this.btns.length;i++ ){
            this.btns[i].classList.remove("active");
            this.contents[i].classList.remove("active");
            this.btns[i].i= i;
        }
    };
    Tab.prototype.init=function(){
        this.getEle();
        this.bindEvent()
    };

    new Tab();

})
