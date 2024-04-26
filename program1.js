/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const stack = [];
    
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    
    for (let char of s) {
        if (char in bracketMap) {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false; 
            }
        } else {       
            stack.push(char);
        }
    }    
    return stack.length === 0;
};

module.exports = { isValid };

