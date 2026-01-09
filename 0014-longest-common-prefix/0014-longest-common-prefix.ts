function longestCommonPrefix(strs: string[]): string {
    if(strs.length === 0)return ""

    let prefix = strs[0]
    for(let i =1 ; i<strs.length;i++){
        while(!strs[i].startsWith(prefix)){
            prefix = prefix.slice(0,-1)
            if(prefix ==="") return""
        }
    }
    return prefix;
};

/**
1. 첫번째 문자열을 기준으로 각인덱스랑 비교
2. startsWith 해서 만약에 아니라면 하나씩 줄이기
3. prefix가 없으면 ""반환
 */