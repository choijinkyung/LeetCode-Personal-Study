/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const temp = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
    const left = 0;
    const right = s.length;

    const r1 = [];
    const r2 = [];
    for(let left =0;left<temp.length/2 ; left++){
        r1[left]=temp[left]
    }
    console.log(r1)

      for(let right =temp.length-1;right>temp.length/2-1 ; right--){

        r2[temp.length-right-1]=temp[right]
 
    }
console.log(r2)
    return JSON.stringify(r1) === JSON.stringify(r2)
};