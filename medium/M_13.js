/**
 *斐波纳契奇数求和
 * 给一个正整数num，返回小于或等于num的斐波纳契奇数之和。
 */

function sumFibs(num) {
    let fibs = [1,1];
    let sum = 2;
    let temp = 0;
    while(true){
        temp = fibs[0] + fibs[1];
        if(temp > num){
            return sum;
        }
        if(temp %2 === 1) {
            sum += temp;
        }
        fibs[0] = fibs[1];
        fibs[1] = temp;
    }
}