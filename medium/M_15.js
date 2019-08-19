/**
 *最小公倍数
 * 求两个参数之间的所有数字的最小公倍数
 * 辗转相除法求最大公约数
 */

function smallestCommons(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let mul = min;
    //依次求两个数的最小公倍数
    for (let i = min + 1; i <= max; ++i) {
        mul *= i / GCD(mul, i);
    }
    return mul;
}

//求最大公约数
function GCD(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let temp = 0;
    while (max % min !== 0) {
        temp = max % min;
        max = min;
        min = temp;
    }
    return min;
}
