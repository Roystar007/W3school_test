/**
 *字符串移动插入
 * 开头不为元音将其(到第一个元音)移到末尾加后缀ay,否则加way
 */

function translate(str) {
    let y = ['a', 'e', 'i', 'o', 'u'];
    //开头为元音
    if (y.indexOf(str.charAt(0)) !== -1) {
        return str + 'way';
    }
    //将辅音字母移到最后
    while (y.indexOf(str.charAt(0)) === -1) {
        str = str.substr(1) + str.substr(0, 1);
    }
    return str + 'ay';
}