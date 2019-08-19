/**
 *数组平铺
 * 将多层嵌套的数组平铺开
 * 递归解决
 */

function steamRoller(arr){
    let res = [];
    function steam(ifArr){
        //如果是数组就继续执行
        if(Array.isArray(ifArr)){
            return ifArr.forEach(function (val) {
                return steam(val);
            })
        }
        else{
            res.push(ifArr);
        }
    }
    steam(arr);
    return res;
}