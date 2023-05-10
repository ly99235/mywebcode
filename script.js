/*document.write("hello jan!");
//alert("hello");
*/
function sayhi(){
    document.write("hello this world!");
   // alert("hello");

}

function change_content(){
    //获取页面的每个按钮
    var btns = document.getElementsByClassName("btn")
    //获取内容盒子
    var contents = document.getElementsByClassName("content")

    //遍历每个按钮为其添加点击事件
    for(var i=0;i<btns.length;i++){
        btns[i].index = i;
        btns[i].onclick = function(){
            //对当前点击的按钮赋予active类名及显示当前按钮对应的内容
            for(var j=0;j<btns.length;j++){
                btns[j].className = btns[j].className.replace(' active', '').trim();
                contents[j].className = contents[j].className.replace(' show', '').trim();
            }
            this.className = this.className + ' active';
            contents[this.index].className = contents[this.index].className + ' show';
        };
    } 
}
/*注册
function register(){
    document.geteElementById('regBtn').onclick = function() {
        var input_username = document.getElementById("suername").value;
        var input_password = document.getElementById("password").value;
        var xhr = new XMLHttpRequest();
        xhr.open("POST","regidterRecv.php");
        xhr.onreadystatechange = function() {
            if(xhr.readyState = 4 && xhr.status == 200) {
                var res = xhr.responseText;
                if(res == "register success") {
                    alert("registed successfull!");
                    window.location.href = "index.html";
                }
                else {
                    alert(res);
                }
            }
        }
    }  
}*/
/*注册后台处理*/

function register() {
    document.getElementById('regBtn').onclick = function() {
    var input_username = document.getElementById("username").value;
    var input_password = document.getElementById("password").value;
    //ajax提交用户名和密码到后台程序
    var xhr = new XMLHttpRequest();        //创建 XMLHttpRequest
    xhr.open("POST","registerRecv.php",ture);   //初始化,post to registerRecv.php
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.send("name=" + input_username + "&password=" + md5(input_password));
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var res = xhr.responseText;
            if(res == "register success") {
                alert("registed successfull!");
                window.location.href = "index.html";
            }
            else {
                alert(res);
            }
        }
    }
}      
}     

