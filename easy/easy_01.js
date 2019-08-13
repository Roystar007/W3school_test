/**
 * 将字符串反转
 * 解法：先将String转为Array，然后翻转,再转回String
 */
function reverseString(str) {
    //String转Array
    let arr = str.split("");
    //翻转
    arr = arr.reverse();
    //Array转String
    str = arr.join("");
    return str;
}
