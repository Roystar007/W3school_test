/**
 *数组分割算法挑战
 * 通过Array.slice()解决
 */

function chunk(arr,size){
    let ans = [];
    //将数组剪切并放入ans中
    for(let i=0;i<arr.length;i+=size){
        ans.push(arr.slice(i,i+size));
    }
    return ans;
}