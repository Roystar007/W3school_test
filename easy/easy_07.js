/**
 *确认末尾字符
 * 检查一个字符串是否以指定字符串结尾
 */

function confirmEnding(str,target){
    let arr = str.split("");
    let temp = [];
    //将跟target长度一致的字符串放入temp中
    for(let i=str.length - target.length;i<str.length;++i){
        temp.push(arr[i]);
    }
    return temp.join("") === target;
}