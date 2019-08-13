/**
 * 回文算法挑战
 * 要删除标点和空格，以及转为小写
 */
//双指针比较判断
function palindrome(str) {
    //将标点等东西替换 search方法只能寻找并返回索引，此处无法使用
    let newStr = str.replace(/[^0-9a-zA-Z]/gi, "");
    newStr = newStr.toLowerCase();
    for (let i = 0, j = newStr.length - 1; i < j; ++i, --j) {
        if (newStr.charAt(i) != newStr.charAt(j)) {
            return false;
        }
    }
    return true;
}

//翻转比较
//reverse只能用在数组上
function palindrome1(str) {
    let newStr = str.replace(/[^0-9a-zA-Z]/gi, "");
    newStr = newStr.toLowerCase();
    let p = newStr.split("");
    let q = p.reverse();
    let revStr = q.join("");
    if (newStr == revStr) {
        return true;
    }
    return false;
}