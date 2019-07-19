window.onload = function () {
    //  封装匀速运动
    function animate(obj, target) {
        clearInterval(obj.timer);  // 先清除定时器
        var speed = obj.offsetLeft < target ? 15 : -15;  // 用来判断 应该 +  还是 -
        obj.timer = setInterval(function () {
            var result = target - obj.offsetLeft; // 因为他们的差值不会超过5
            obj.style.left = obj.offsetLeft + speed + "px";
            if (Math.abs(result) <= 15)  // 如果差值不小于 5 说明到位置了
            {
                clearInterval(obj.timer);
                obj.style.left = target + "px";  // 有5像素差距   我们直接跳转目标位置
            }
        }, 15)
    }


    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var box = document.getElementById("box");
    //获取相框
    var screen = box.children[0];
    var imgWidth = screen.offsetWidth;
    // console.log(imgWidth);
    //获取ul
    var ulObj = screen.children[0];
    //获取ul中的所有的li
    var pic = 0;//全局变量
    //创建小按钮----根据ul中的li个数
    //自动播放
    var timeId = setInterval(clickHandle, 4000);

    //鼠标进入到box的div显示左右焦点的div
    box.onmouseover = function () {
        //鼠标进入废掉之前的定时器
        clearInterval(timeId);
    };
    //鼠标离开到box的div隐藏左右焦点的div
    box.onmouseout = function () {
        //鼠标离开自动播放
        timeId = setInterval(clickHandle, 4000);
    };

    right.onclick = function(){
        clearInterval(timeId);
        pic++;
        if(pic==2){
            pic=1;
        }
        console.log(pic);
        animate(ulObj, -1 * imgWidth);
        
    };

    function clickHandle() {
        if (pic == 1) {
            pic = -1;
            // ulObj.style.left = +pic * imgWidth + "px";
            animate(ulObj, 0 * imgWidth);
        }
        pic++;
        console.log(pic);
        animate(ulObj, -pic * imgWidth);//pic从0的值加1之后,pic的值是1,然后ul移动出去一个图片
    };

    left.onclick = function () {
        clearInterval(timeId);
        pic--;
        if(pic==-1){
            pic=0;
        }
        console.log(pic);
        animate(ulObj, 0 * imgWidth);
    }


    var close=document.getElementById("close");
    var chat=document.getElementById("chat-wrap");
    var flex=document.getElementById("flex");
    close.onclick=function(){
        chat.style.display="none";
        flex.style.display="block";
    }

    flex.onclick=function(){
        flex.style.display="none";
        chat.style.display="block";
    }
}