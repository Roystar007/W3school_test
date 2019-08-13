/**
 *寻找数组中的最大值
 */

function largestOfFour(arr) {
    let ans = [];
    for (let i = 0; i < arr.length; ++i) {
        ans[i] = 0;
        //选出最大值
        for (let j = 0; j < arr[i].length; ++j) {
            if (arr[i][j] > ans[i]) {
                ans[i] = arr[i][j];
            }
        }
    }
    return ans;
}