/**
 *字符串截取算法
 * num<3,...不计数；num>3，...计数
 * 注意num>str.length长度的情况
 */
function truncate(str, num) {
    let ans = "";
    if (num < str.length) {
        if (num < 3) {
            ans = str.substr(0, num) + "...";
        } else {
            ans = str.substr(0, num - 3) + "...";
        }
    } else {
        ans = str;
    }
    return ans;
}