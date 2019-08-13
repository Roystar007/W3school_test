/**
 *首字母大写，其余小写
 * String转Array操作
 */
//substr() 第二个参数为截取几个
//substring 第二个参数为截取到的索引
//不能直接设置arr[i][0]为大写，要拼接起来
function titleCase(str) {
    let arr = str.toLowerCase().split(" ");
    for (let i = 0; i < arr.length; ++i) {
        //拼接字符串
        arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    }
    return arr.join(" ");
}