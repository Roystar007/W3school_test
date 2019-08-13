/**
 * 阶乘算法挑战
 * 简单的阶乘
 */
//循环解决
function factorialize(num) {
    let mul = 1;
    if (num === 0 || num === 1) {
        return mul;
    }
    for (let i = 1; i <= num; ++i) {
        mul *= i;
    }
    return mul;
}

//递归解法
function factorialize1(num) {
    //0或1直接返回1
    if (num == 0 || num == 1) {
        return 1;
    } else {
        //递归解决
        return num * factorialize1(num - 1);
    }

}
