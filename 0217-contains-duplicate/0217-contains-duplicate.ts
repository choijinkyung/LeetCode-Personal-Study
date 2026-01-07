function containsDuplicate(nums: number[]): boolean {
    const result = new Set();
    for(let num of nums){
        result.add(num)
    }
    return result.size !== nums.length
};

/**
return true : at least twice
return flase : distinct 
 */