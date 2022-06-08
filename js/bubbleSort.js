var sequence = [5, 4, 3, 2, 0]
var swaps = 0

for (i = 1; i < sequence.length; i++) {
        for (let k = 1; k < sequence.length; k++) {
            if (sequence[k - 1] > sequence[k]) {
                let temp = sequence[k];
                sequence[k] = sequence[k - 1];
                sequence[k - 1] = temp;
                swaps += 1
                continue
            } 
        }
    }
let result= sequence
console.log("Final result: " + result)
console.log("Swaps: " + swaps)
console.log(iterations)
