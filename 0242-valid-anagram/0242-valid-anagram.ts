function isAnagram(s: string, t: string): boolean {
    if(s.length!==t.length)return false;

    const map = new Map();

    for(const char of s){
        map.set(char,(map.get(char) ??0)+1)
    }

    for(const char of t){
        if(!map.has(char))return false;
        const count = map.get(char)!-1;
        if(count ===0){
            map.delete(char);
        }else{
            map.set(char,count)
        }
    }
    return map.size===0;
};