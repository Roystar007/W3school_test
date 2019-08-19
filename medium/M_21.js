/**
 *函数迭代可选参数
 * 创建一个计算两个参数之和的 function。
 * 如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。
 */

function add() {
    //输入的是两个数字，相加返回
    if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
        return arguments[0] + arguments[1];
    } else if (arguments.length == 1 && typeof arguments[0] == "number") {
        let x = arguments[0];
        //如果只有一个数字型参数x，返回x和后面捕捉到的任意一个数字型参数y之和
        return function (y) {
            if (typeof y == "number") {
                return x + y;
            }
        };
    }
}