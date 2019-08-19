/**
 *HTML符号转成实体
 * 运用正则表达式进行替换
 */

function conver(str){
    let entityMap = {
        '&' : '&amp;',
        '<' : '&lt;',
        '>' : '&gt;',
        '"' : '&quot;',
        "'" : '&apos;'
    };
    //正则表达式
    let regexp = new RegExp('['+ Object.keys(entityMap).join()+']',g);
    str.replace(regexp,function(matched){
        return entityMap[matched];
    })
}