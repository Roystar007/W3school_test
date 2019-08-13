/**
 *位移密码
 * 简单判断，注意编码转换
 */

function rot13(str){
    let ans = [];
    for(let i=0;i<str.length;++i){
        //非字母不转换
        if(str.charCodeAt(i)<65||str.charCodeAt(i)>90){
            ans.push(str.charAt(i));
        }else if(str.charCodeAt(i)>77){
            //后13个小写字母
            ans.push(String.fromCharCode(str.charCodeAt(i)-13));
        }else{
            //前13个字母
            ans.push(String.fromCharCode(str.charCodeAt(i)+13));
        }
    }
    //转为字符串
    return ans.join("");
}