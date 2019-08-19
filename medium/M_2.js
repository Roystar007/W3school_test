/**
 *数组间差异算法
 */

function diff(arr1, arr2) {
    let newArr1 = [], newArr2 = [];
    //存放arr1不在arr2的元素
    newArr1 = arr1.filter(function (value) {
        return arr2.indexOf(value) == -1;
    })
    //存放arr2不在arr1的元素
    newArr2 = arr2.filter(function (value) {
        return arr1.indexOf(value) == -1;
    })

    return newArr2.concat(newArr2);

}