// 价格模拟服务器的数据

let data = [
    { "count": 4000, "price": 1200, "unitPrice": "0.3000" },
    { "count": 8000, "price": 2000, "unitPrice": "0.2500" },
    { "count": 40000, "price": 8000, "unitPrice": "0.2000" }
]

//获取节点元素
let contentBtn = document.querySelector(".content-btn")
//console.log(contentBtn);
let contentText = document.querySelector(".content-text")
console.log(contentText);
data.forEach(function (v, i) {
    console.log(v);
    contentBtn.innerHTML += `<span class = "btn">${v.count}</span>
`
})
let spanArr = document.querySelectorAll(".content-btn .btn")
console.log(spanArr);
spanArr[0].classList.add("act")

spanArr.forEach(function (v, i) {
    v.addEventListener("click", function (v1, i1) {
        //console.log("wowo");
        spanArr.forEach(function (v2, i2) {
            v2.classList.remove("act")
        })
        v.classList.add("act")
        contentText.innerHTML = `
        <span>￥${data[i].price}</span>
        (约${data[i].unitPrice}元/次),仅限企业实名购买;
        `
    })

})
/*  */

//tab 切换
//获取.tab 下的sapn标签按钮节点
let tab = document.querySelectorAll(".tab span")
console.log(tab);
//获取cont 下的ul标签内容节点
let cont = document.querySelectorAll(".cont ul")
console.log(cont);
//遍历按钮，添加点击事件
cont[0].style.display = "block"//立即调用

tab.forEach(function (v1, i1) {
    //console.log(v1);
    v1.addEventListener("click", function () {
        //清除所有的active(遍历tab)
        tab.forEach(function (v2, i2) {
            v2.classList.remove("active")
            cont[i2].style.display = "none"

        })
        v1.classList.add("active")
        cont[i1].style.display = "block"

    })
})
