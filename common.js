function $(id){
    return document.getElementById(id);
}
function creatXhr(){
    var xhr = nulll;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();                     //标准创建
    }else {
        xhr = new ActiveXObject("Microsoft.XMLHttp");   //ie8以下创建方式
    }
    return xhr;
}
