function groupAnagrams(strs: string[]): string[][] {
 let result = new Map()
    
    for(let str of strs){
        let sorted = Array.from(str).sort().join('')
        //toString 보다는 join
        //toString은 자동으로 ,를 끼워넣음. 배열을 그냥 문자열로 덤프한 것
        //join은 배열 -> 문자열로 붙인다는 의도를 가짐
        const group = result.get(sorted) ?? [];
       group.push(str);
       result.set(sorted,group)
    }
    console.log(result)
    return Array.from(result.values());
};