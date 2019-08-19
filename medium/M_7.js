/**
 *字符配对
 * 碱基基因对ATCG配对
 */

function pair(str) {
    let arr = str.split("");
    let ans = [];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] == "G" || arr[i] == "C") {
            (arr[i] == "G") ? ans.push(["G", "C"]) : ans.push(["C", "G"]);
        }
        if (arr[i] == "A" || arr[i] == "T") {
            (arr[i] == "A") ? ans.push(["A", "T"]) : ans.push(["T", "A"]);
        }
    }
    return ans;
}