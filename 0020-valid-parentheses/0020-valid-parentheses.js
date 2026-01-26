/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const closed = new Map([
        [')','('],['}','{'],[']','[']
    ])
    const stack = [];

    for(let char of s){
        if(closed.has(char)){
            // 닫는 괄호인데 스택이 비어있으면 ❌
            if(stack.length == 0){
                return false;
            }
            const top =  stack.pop()
             // 짝이 안 맞으면 ❌
            if(top !== closed.get(char)) return false;
        }else{
              // 여는 괄호
            stack.push(char)
        }
    }
    return stack.length===0;
};