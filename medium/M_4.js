/**
 *对象搜索
 * 返回第一个参数中包含第二个参数的对象
 * 考察对象中属性的应用
 * hasOwnProperty()判断是否有该值
 */

function where(collection, source) {
    let ans = [];
    //首先获得source中属性的长度
    //将source的所有属性存入shuxing数组
    let shuxing = [];
    for (let n in source) {
        shuxing.push(n);
    }

    //将source中的属性和collection中的属性一一比较,collection中的属性全部满足source中的属性后再存入
    for (let j = 0; j < collection.length; j++) {
        let count = 0;
        for (let i = 0; i < shuxing.length; i++) {
            //如果他拥有这个属性值,并且属性值相等标记变量+1
            if (collection[j].hasOwnProperty(shuxing[i]) && collection[j][shuxing[i]] == source[shuxing[i]]) {
                count++;
            }
        }

        //collection[j]中含有全部source中全部属性并且属性值相等的情况下存入
        if (count == shuxing.length) {
            ans.push(collection[j]);
        }
    }

    return ans;
}