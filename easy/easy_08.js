/**
 *重复拼接指定字符串num次
 * 循环拼接
 */
function repeate(str,num){
    let ans = "";
    //为非正数时返回空字符串
    if(num <=0){
        return ans;
    }
    for(let i= 0; i<num ;++i){
        ans += str;
    }
    return ans;
}