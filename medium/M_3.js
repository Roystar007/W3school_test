/**
 *数字转罗马数字
 * 罗马数字的转换规则
 */

function convert(num) {
    let ans = "";
    //向下取整
    let q = Math.floor(num / 1000);
    let b = Math.floor((num % 1000) / 100);
    let s = Math.floor((num % 100) / 10);
    let g = num % 10;
    let one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let hundred = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    let thousand = 'M';
    //计算千位
    for (let i = 0; i < q; ++i) {
        ans += thousand;
    }
    //计算百位
    if (b) {
        ans += hundred[b - 1];
    }
    //计算十位
    if (s) {
        ans += ten[s - 1];
    }
    //计算个位
    if (g) {
        ans += one[g - 1];
    }
    return ans;
}