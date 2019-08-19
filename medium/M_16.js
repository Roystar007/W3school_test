/**
 *数组验证,返回第一个符合参数的值
 * Array.filter()函数
 */

function find(arr, func) {
    let num = 0;
    //限制返回个数
    num = arr.filter(func)[0];
    return num;
}

//例子：find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
//只返回2，不反回4
