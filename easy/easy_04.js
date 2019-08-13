/**
 * 寻找最长的单词
 * 返回句子中最长的单词长度，将String转为Array来做
 */
//循环比较最长单词
function findLongestWord(str) {
    //将每个单词分开
    let array = str.split(" ");
    let maxLength = 0;
    for(let i=0;i<array.length;++i){
        if(array[i].length>maxLength){
            maxLength = array[i].length;
        }
    }
    return maxLength;
}

//利用排序将最长的字符串放在第一位
//sort函数 升序value1-value2 降序反之
function findLogestWord1(str) {
    let arr = str.split(" ");
    arr.sort(function(x,y){
        return y.length-x.length;
    })
    return arr[0].length;
}
