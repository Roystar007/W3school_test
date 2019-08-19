/**
 *区间求值算法
 * arr数组只有两个值，大小先后不确定
 * for循环,Math.min() max()
 */

function sumAll(arr) {
    let sum = 0;
    //从最小值加到最大值
    for (let i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); ++i) {
        sum += i;
    }
    return sum;
}