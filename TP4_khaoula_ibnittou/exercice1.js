/**
 *
 *
 * @param {Array} arr tableau en entree
 * @return {Array} tableau couple
 */
function compressArray(arr) {
    if (arr.length === 0) return [];
    
    let result = [];
    let currentElement = arr[0];
    let count = 1;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === currentElement) {
            count++;
        } else {
            result.push([currentElement, count]);
            currentElement = arr[i];
            count = 1;
        }
    }
    result.push([currentElement, count]);
    
    return result;
}

console.log(compressArray(['a', 'a', 'b', 'b', 'b', 'c', 'a', 'a']));
