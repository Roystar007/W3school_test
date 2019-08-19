/**
 *数组取值
 * 删除数组(第一个参数)的元素，从左边开始，直到回调函数（第二个参数）return true就停止。
 * Array.shift()的使用
 */

function drop(arr,func){
    while(func(arr[0])==true){
        arr.shift();
    }
    return arr;
}