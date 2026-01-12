function groupAnagrams(strs: string[]): string[][] {
 let result = new Map()
    
    for(let str of strs){
        let sorted = Array.from(str).sort().join('')
        //toString 보다는 join
        //toString은 자동으로 ,를 끼워넣음. 배열을 그냥 문자열로 덤프한 것
        //join은 배열 -> 문자열로 붙인다는 의도를 가짐
        const group = result.get(sorted) ?? [];
        //if else를 쓰거나 get -> default -> set을 쓰거나
       group.push(str);
       result.set(sorted,group)
    }
    console.log(result)
    return Array.from(result.values());
};

/**
더 빠른 방법 : 문자열 빈도수 
Array.from(str).sort(이게 병목현상을 일으킴)
	1.	count[26] = 0 배열 생성
	2.	단어의 각 문자에 대해 count[charIndex]++
	3.	count를 Map key로 쓸 수 있게 고정된 형태 문자열로 변환
	•	예: count.join('#') (구분자 필수 추천)
	4.	그 key로 그룹핑

let count = new Array(26).fill(0)
const map = new Map()
for(let str of strs){
    for(let c of str){
        const charIndex = c.charCodeAt()-97;
        count[charIndex]++;
    }
    const key = count.join("#")
    const group = map.get(key);
    if(group)group.push(str);
    else map.set(key,[str])

    return Array.from(map.values())
}
 */