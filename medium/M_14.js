/**
 *质素求和
 * 求小于等于给定数值的质数之和。
 */

function sumPrimes(num) {
    let sum = 0;
    if (num <= 1) {
        return undefined;
    }
    //1不是质数，所以从2开始
    for (let i = 2; i <= num; ++i) {
        let j = 2;
        //判断是否为质数
        for (; i % j != 0; ++j) {

        }
        if (j == i) {
            sum += i;
        }
    }
    return sum;
}