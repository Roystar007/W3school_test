/**
 *数组排序并插入值
 * 使用sort(),indexOf()
 * sort()升序排列需return a-b;
 */

function where(arr,num){
    arr.push(num);
    arr.sort(function(a,b){
        return a-b;
    });
    return arr.indexOf(num);
}