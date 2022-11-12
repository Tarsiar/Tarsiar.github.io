//获取4的×节点
let bgImg = document.querySelectorAll(".logon img");
console.log(bgImg);
//获取4个input框
let inPut = document.querySelectorAll(".input");
console.log(inPut);
//获取4个提示
let pArr = document.querySelectorAll(".js p");
console.log(pArr);
//获取勾选按钮
let check = document.querySelector(".know input");
console.log(check);
//获取注册按钮
let btn = document.querySelector(".btn");
console.log(btn);

/*注册正则*/
let regArr = [
    /^[a-zA-Z]\w{5,11}$/, //6-12: 字母开头,后面跟字母\数字\下划线
    /^1[3456789][0-9]{9}$/, //11:
    /^[a-zA-Z]\w{3}$/, //4位验证码: 字母开头,后面跟字母\数字\下划线
    /^[a-zA-Z]\w{5,11}$/, //6-12: 字母开头,后面跟字母\数字\下划线
];
//let iphoneReg = /^[a-zA-Z]\w{5,11}$/
//let bol = iphoneReg.test("123456789")
//console.log(bol);
//
////遍历正则
//regArr.forEach(function (v, i) {
//    console.log(v, i);
//})

//遍历input
inPut.forEach(function (v, i) {
    //console.log(v);
    v.addEventListener("click", function () {
        //边框变色
        v.style.borderColor = "#00bdff";
    });
    v.addEventListener("input", function () {
        //显示叉叉
        bgImg[i].style.display = "block";
        //判断value长度大于零才显示叉叉
        if (v.value.length > 0) {
            bgImg[i].style.display = "block";
        }
    });
    bgImg.forEach(function (v1, i1) {
        v1.addEventListener("click", function () {
            bgImg[i].style.display = "none";
            inPut[i].value = "";
        });
    });
    //失去焦点事件判断正则
    v.addEventListener("blur", function () {
        console.log("失去焦点");
        let bol = regArr[i].test(v.value);
        if (bol) {
            pArr[i].style.display = "none";
            v.style.borderColor = "#00bdff";
        } else {
            pArr[i].style.display = "block";
            v.style.borderColor = "red";
        }
    });
});

//复选框交换事件
check.addEventListener("change", function () {

    /* //btn.style.backgroundColor = "#23b8ff" */
    if (check.checked) {
        btn.style.backgroundColor = "#23b8ff";
        btn.disabled = false;
    } else {
        btn.style.backgroundColor = "#c5c5c5";
        btn.disabled = true;
    }
});
//注册按钮点击事件
btn.addEventListener("click", function () {
    console.log('输入框' + inPut)
    let falg = true;
    
    inPut.forEach(function (v, i) {
        console.log(v);
        let bol = regArr[i].test(v.value);
        if (bol) {
            pArr[i].style.display = "none";
            v.style.borderColor = "#00bdff";
        } else {
            pArr[i].style.display = "block";
            v.style.borderColor = "red";
            falg = false;
            //console.log("假");
        }
    });


    if (falg) {
        let obj = {
            name: inPut[0].value,
            iphone: inPut[1].value,
            code: inPut[2].value,
            psd: inPut[3].value,
        };
        console.log("women", obj);
    }
});

//遍历input
/* inPut.forEach(function (v, i) { */
/*     //input添加输入事件 */
/*     v.addEventListener("input", function () { */
/*  */
/*         bgImg[i].style.display = "block"; */
/*         v.style.borderColor = "#00bdff"; */
/*  */
/*         bgImg.forEach(function (v1, i1) { */
/*             console.log("4个×"); */
/*             pArr[i].style.display = "block" */
/*  */
/*             v1.addEventListener("click", function (v2, i2) { */
/*                 //console.log(inPut[i].value); */
/*                 inPut[i].value = ""; */
/*  */
/*             }); */
/*         }); */
/*     });   */
/* }); */
