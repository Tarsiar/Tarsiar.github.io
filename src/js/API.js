//api按钮列表数据
let apiTypeData = [
    { name: "全部", keyword: "身份证实名", isnew: false },
    { name: "生活服务", keyword: "银行卡", isnew: false },
    { name: "金融科技", keyword: "短信", isnew: false },
    { name: "交通地理", keyword: "天气", isnew: false },
    { name: "充值缴费", keyword: "短信", isnew: false },
    { name: "数据智能", keyword: "手机归属地", isnew: false },
    { name: "企业工商", keyword: "IP", isnew: false },
    { name: "应用开发", keyword: "手机归属地", isnew: false },
    { name: "电子商务", keyword: "IP", isnew: false },
    { name: "吃喝玩乐", keyword: "视频", isnew: false },
    { name: "文娱视频", keyword: "视频", isnew: false },
    { name: "免费接口大全", keyword: "短信", isnew: true },
    { name: "短信", keyword: "身份证实名", isnew: false },
    { name: "汽车", keyword: "银行卡", isnew: false },
    { name: "核验", keyword: "银行卡", isnew: false },
    { name: "最新发布", keyword: "银行卡", isnew: true },
    { name: "API私有化部署", keyword: "身份证实名", isnew: true },
]
let apiBtn = document.querySelector(".api-btn")
console.log(apiBtn);
//遍历数组
apiTypeData.forEach(function (v, i) {
    //console.log(v);
    //获取name属性
    //console.log(v.name);
    let aipstr
    aipstr = `<a href="">${v.name}</a>`
    //console.log(aipstr);
    //第一种
    //if(v.isnew){
    // aipstr =`<a href="" class="new" >${v.name}</a>`
    //}
    //else {
    // aipstr =`<a href="" class="" >${v.name}</a>`
    //}
    //第二种--三目运算符
    aipstr = `<a href="" class ="${v.isnew ? `new` : ``}">${v.name}</a>`
    apiBtn.innerHTML += aipstr

})

/* api下的搜索 */
let lableSpan = document.querySelector(".api-label span")
console.log(lableSpan);
let lableInput = document.querySelector(".api-label input")
console.log(lableInput);
let lableA = document.querySelectorAll(".api-btn a")
console.log(lableA);

//遍历a标签
lableA.forEach(function (v, i) {
    //console.log(v);
    //0级事件 return flase 阻止a标签默认href属性
    v.onclick = function () {
        lableA.forEach(function (v2, i2) {
            v2.classList.remove("active")

        })
        v.classList.add("active")
        //获取当前下标 console.log(i);
        apiTypeData[i].name
        console.log(apiTypeData[i].name);
        //获取当前apiTypeData的name键

        //将apiTypeData的name给lableSpan.innerHTML
        lableSpan.innerHTML = apiTypeData[i].name
        lableInput.placeholder = apiTypeData[i].keyword
        return false
    }
})


//API列表区域 模拟服务器返回的数据
let listDataArr = [
    //第一行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },

    //第二行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },
    //第三行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },
    //第四行
    { img: "API_01.jpg", name: "2021出行防疫政策指南", price: "免费", isSpecial: false },
    { img: "API_02.jpg", name: "身份证实名认证", price: "￥0.2000/次", isSpecial: true },
    { img: "API_03.jpg", name: "天气预报", price: "免费", isSpecial: false },
    { img: "API_04.jpg", name: "银行卡四元素校验", price: "￥0.3360/次", isSpecial: true },
    { img: "API_05.jpg", name: "短信API服务", price: "￥0.0400/次", isSpecial: true },
]

//遍历服务器返回数据
let listStr = ""
listDataArr.forEach(function (v) {
    //console.log(v);
    listStr += `
        <li class="fl" >
            ${v.isSpecial ? `<span>企业专用</span>` : ""}
            <a href="../pages/APIdetail.html">
                <img src="../images/${v.img}" alt="">
                <h3>${v.name}</h3>
                <p class="${v.price == "免费" ? "green" : "red"}">${v.price}</p>
            </a>
            <button>申请数据</button>
        </li>
    `

})
/* 第二个小模态框 */
let apiList = document.querySelector(".api-list")
apiList.innerHTML = listStr;

//获取.api-list 下的登录按钮
let btn = document.querySelectorAll(".api-list button")
//console.log(btn);

//获取整个的蒙层
let mantleTwo = document.querySelector(".mantle-two")
//console.log(mantleTwo);
btn.forEach(function (v) {
    v.addEventListener("click", function () {
        mantleTwo.style.display = "block"
    })
})

mantleTwo.addEventListener("click", function (e) {
    //e.target.classList.contains("mantle-two")
    if (e.target.classList.contains("mantle-two")) {
        mantleTwo.style.display = "none"
    }
})

//获取第二个模态框的登录按钮
//获取按钮
let landing = document.querySelectorAll(".landing button")
console.log(landing);
console.log(landing[1]);


//获取内容-解决
//内容1
let cttOne = document.querySelector(".ctt-one")
console.log(cttOne);
//内容2
let cttTwo = document.querySelector(".ctt-two")
console.log(cttTwo);
landing[0].style.color = "#00bdff"
landing[0].addEventListener("click", function () {
    cttOne.style.display = "block"
    cttTwo.style.display = "none"
    landing[0].classList.add("active")
    landing[1].classList.remove("active")

    landing[0].style.color = "#00bdff"
    landing[1].style.color = "#000"
})
landing[1].addEventListener("click", function () {
    cttOne.style.display = "none"
    cttTwo.style.display = "block"
    landing[1].classList.add("active")
    landing[0].classList.remove("active")
    landing[1].style.color = "#00bdff"
    landing[0].style.color = "#000"
})


//获取账号--判断账号和密码未解决
let text = document.querySelector(".text")
console.log(text);

//获取密码
let password = document.querySelector(".password")
console.log(password);

function get() {
    let party = text.value
    let pass = password.value
    console.log(party);
    console.log(pass);

    if (password.value == '') { console.log("请输入密码") }
    if (text.value == '') { console.log("请输入账号") }

}

//获取清除按钮
let clearImg = document.querySelectorAll(".ctt-one img")
//console.log(clearImg);
//console.log(clearImg[0]);
clearImg[0].addEventListener("click", function () {
    text.value = ""
    console.log("被击了");
})
clearImg[1].addEventListener("click", function () {
    password.value = ""
    console.log("被击了");
})
/* 用循环 */
/* clearImg.forEach(function (v) { */
/* v.addEventListener("click",function(v,i){ */
/*  */
/* }) */
/* }) */