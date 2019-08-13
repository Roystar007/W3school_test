/**
 *删除数组中特定值
 * Array.filter(function(){})的运用
 * function()返回true则返回该值
 * false、null、0、""、undefined 和 NaN 这些值会被删除
 */

function bouncer(arr) {
    return arr.filter(function (temp) {
        //!temp 是的这些值返回true
        return !(temp === "" || !temp);
    });
}