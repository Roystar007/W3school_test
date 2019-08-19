/**
 * 字符串查询补充
 * 从开头到结尾的所有字母  abce 返回一个 d
 */

function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; ++i) {
        //通过编码判断是否相连
        if (str.charCodeAt(i) - str.charCodeAt(i + 1) != -1) {
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return undefined;
}