/**
 *数组元素判断
 * 完善编辑器中的every函数，如果集合(collection)中的所有对象都存在对应的属性(第二个参数)，
 * 并且属性(第二个参数)对应的值为真。函数返回true。反之，返回false。
 */

function every(collection, pre) {
    for (let i = 0; i < collection.length; ++i) {
        if (!collection[i][pre])
            return false;
    }
    return true;
}

/*例子
every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"},
    {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");*/