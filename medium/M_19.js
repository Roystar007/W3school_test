/**
 *二进制字符转化
 * 
 */
function binaryAgent(str) {
    //将字符串分隔
    let arr = str.split(" ");
    let newArr = [];
    let newStr = "";
    for(let i=0;i<arr.length;++i){
        //将字符以二进制转换为十进制
        newArr.push(parseInt(arr[i],2));
    }
    for(let i=0;i<newArr.length;++i){
        newStr += String.fromCharCode(newArr[i]);
    }
    return newStr;
}

//binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110
// 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");