/**
 *数组查询
 * 第一个数组包含第二个数组的所有元素则返回true
 * Array.indexOf()函数
 */

function mutation(arr) {
    let temp1 = arr[0].toLowerCase();
    let temp2 = arr[1].toLowerCase();
    for (let i = 0; i < temp2.length; ++i) {
        //返回-1则代表不存在该元素，返回false
        if (temp1.indexOf(temp2[i]) === -1) {
            return false;
        }
    }
    return true;
}