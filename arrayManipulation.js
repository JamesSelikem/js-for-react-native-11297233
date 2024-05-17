function processArray(array) {
    var result = [];
    
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i] * array[i]);
        } else {
            result.push(array[i] * 3);
        }
    }
    
    return result;
}

//Example
var inputArray = [1,2,3,4,5,6,7,8,9,10];
var outputArray = processArray(inputArray);
console.log(outputArray);