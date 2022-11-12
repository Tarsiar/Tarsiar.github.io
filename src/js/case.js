let sideP = document.querySelectorAll(".side p");
// console.log(sideP);
let box = document.querySelectorAll(".box");
console.log(sideP, box);
let Time;
sideP.forEach(function (v, i) {
    //console.log(v);
    v.addEventListener("click", function () {
        // console.log(window.scrollY); //获取当前高度
        // scrollTo(0, scrollY + 300  )
        //box[i].offsetTop; //偏移顶部的距离
        //console.log(box[i].offsetTop);
        //滚动到内容板块相应的高度
        // scrollTo(0, box[i].offsetTop)
        clearInterval(Time);//清除上一次的定时器
        if (box[i].offsetTop < window.scrollY) {//判断内容偏移顶部的距离
            //console.log("上面");
            Time = setInterval(function () {
                window.scrollTo(0, window.scrollY - 10);
                if (window.scrollY <= box[i].offsetTop) {//当窗口高度小于等于内容偏移顶部的距离---停止计时器
                    clearInterval(Time);
                }
            }, 15);
        } else {
            //console.log("下面", window.scrollY);
            Time = setInterval(function () {
                window.scrollTo(0, window.scrollY + 10);
                if (window.scrollY >= box[i].offsetTop) {
                    clearInterval(Time);
                }
                if (window.scrollY > 1800) {
                    clearInterval(Time);
                }
            }, 15);
        }
        // clearInterval(Time);
        // Time = setInterval(function () {

        //    window.scrollTo(0, window.scrollY + box[i].offsetTop / 5);

        // if (scrollY == box[i].offsetTop) {
        // clearInterval(Time);
        // }
        // }, 15);
    });
});

// 窗口滚动事件
let side = document.querySelector(".side ");
console.log(side);
window.addEventListener("scroll", function () {
    // console.log(window.scrollY);
    if (window.scrollY >= 360) {
        side.style.display = "block";
    } else {
        side.style.display = "none";
    }
});
