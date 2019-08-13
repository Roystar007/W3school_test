/**
 *去除数组中任意多个值
 * Array.filter(function(){})操作
 */

function destroy(arr) {
    //arr=[1,2,3,4];
    //arguments是保存当前函数所有的参数的类数组对象
    //假设arr=[[1,2,3,4],[2],[3]];
    //argArr = {"0":[1,2,3,4],"1":[2],"2":[3]};
    let argArr = arguments;
    //遍历参数数组，与初始数组的每个元素进行比较，返回初始数组中不同的元素
    for (let i = 1; i < argArr.length; i++) {
        arr = arr.filter(function (val) {
            return argArr[i] !== val;
        });
    }
    return arr;
}

destroy([1, 2, 3, 4], 2, 3)