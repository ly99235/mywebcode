function $(id){
    return document.getElementById(id);
}
function creatXhr(){
    var xhr = nulll;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else {
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    }
    return xhr;
}
function check_name(){
    var xhr = creatXhr();
    var uname =$("username").value;
    var url = "check_name.php?uname=" + uname;
    xhr.open("get",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState ==4 && xhr.status == 200) {
            $("uname-show").innerHTML = xhr.responseText;
        }
    }
    xhr.send(null);
}
function check_pwd(){
    var upwd = $("upwd").value;
    var cpwd = $("cpwd").value;
    if(upwd == cpwd && upwd !=""){
        $("pwd-show").innerHTML = "pass";
    }else {
        $("pwd-show").innerHTML = "password is not match";
    }
} 