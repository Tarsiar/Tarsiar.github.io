//获取切换按钮
let lands = document.querySelectorAll(".landing .lands")
console.log(lands);
//获取切换内容
let cont = document.querySelectorAll(".tab")
console.log(cont);
//便利按钮
lands.forEach(function (v, i) {
    //console.log(v);
    //添加点击事件
    v.addEventListener("click", function () {
        //在便利一次清除之前的active
        lands.forEach(function(v1,i1){
            v1.classList.remove("active")
            cont[i1].style.display = "none"
        })
        //点击时添加active
        v.classList.add("active")
        cont[i].style.display = "block"
    })

})