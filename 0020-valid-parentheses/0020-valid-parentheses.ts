function isValid(s: string): boolean {
    const map = new Map<string,string>([
    [')','('],
    [']','['],
    ['}','{']
    ])
    const stack:string[] = []
    for(const char of s){
    
        //닫는 괄호일때
            //스택이 비어있으면 false
            //스택에서 하나 pop 
                //여는 괄호랑 같은가? 다르면 false
         if(map.has(char)){
            if(stack.length === 0)return false;
            const top=stack.pop()!;
            if(top!==map.get(char))return false;
         }
        else{//여는 괄호일때
            //stack에 넣기
            stack.push(char)
        }
        
    }
    return stack.length ===0;     
};