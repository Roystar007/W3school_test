/**
 *数组去重算法
 *传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
 */

function unite(arr1,arr2,arr3){
    //将三个数组构成一个数组[[arr1],[arr2],[arr3]];
    let arrs = Array.from(arguments);
    //arrs转化为[ a,b,c,d]型
    //reduce接收一个函数作为累加器
    //该用法将多个数组合并为一个
    let arr = arrs.reduce(function (prev,cur) {
        return prev.concat(cur);
    })
    //删除重复元素
    return arr.filter(function(item,index,arr){
        return arr.indexOf(item) === index;
    });

}