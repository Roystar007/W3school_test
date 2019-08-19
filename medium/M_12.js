/**
 *字符串连接算法
 * 将字符串转换为以-连接的字符串
 * 以大写字母或者空格或者_分隔
 */

function spinalCase(str){
    let arr = str.split(" ");
    //没有以空格分隔，检查是否以_分隔
    if(arr.length<=1){
        arr = str.split("_");
    }
    //以大写首字母分隔
    //将大写字母以-大写字母替换
    //$1对应第一个括号的表达式
    //然后转换为小写
    if(arr.length<=1){
        return str.replace(/[A-Z]/g,"-$1").toLowerCase();}
    //将第一个单词组加入到str里
    str = arr[0].toLowerCase();
    for(let i=1;i<arr.length;++i){
        str += "-" + arr[i].toLowerCase();
    }
    return str;
}