


/* 海量分类 */
let classift = document.querySelectorAll(".classify li")
console.log(classift);
classift.forEach(function (v) {
    console.log(v);
    let aa
    v.addEventListener("mouseover", function () {
        v.classList.add("hover")
        console.log(v.children[0].src);
        let aq = v.children[0].src.lastIndexOf("/")
        console.log(aq);
        let ad = v.children[0].src.lastIndexOf(".")
        console.log(ad);
        aa = v.children[0].src.slice(aq + 1, ad)
        console.log(aa);
        v.children[0].src = `../images/${aa}-c.svg`
    })
    v.addEventListener("mouseout", function () {
        v.children[0].src = `../images/${aa}.svg`
    })
})


/* 返回顶部 */
let totop = document.querySelector(".totop")
//console.log(totop);
let time
totop.addEventListener("click", function () {
    //console.log(window.scrollY);
    /* v.style.backgroundColor = "#1271ef" */
    clearInterval(time)//清除上一次的定时器

    time = setInterval(function () {
        let times = window.scrollY - window.scrollY / 8
        window.scrollTo(0, times);
        if (
            window.scrollY <= 0
        ) { clearInterval(time) }
    }, 60)
})
//添加窗口事件
window.addEventListener("scroll", function () {
    if (window.scrollY >= 500) {
        totop.style.display = "block"
    }
    else {
        totop.style.display = "none"
    }
})