/**
 *字符查询替换
 * 查找第一个参数中的第二个参数位置，并替换为第三个参数
 * 替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
 * replace()函数
 */
function myReplace(arr, before, after) {
    //判断before首字母的大小写
    if (before.charAt(0).toUpperCase() === before.charAt(0)) {
        after = after.charAt(0).toUpperCase() + after.substr(1);
    }

    return str.replace(before, after);

}