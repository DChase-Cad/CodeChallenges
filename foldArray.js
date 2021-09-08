//code challenge to fold an array n times
//6kyu kata link: https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/javascript

function foldArray(array, runs) {
    if (!array.length) return [0]; //array is empty
    if (runs === 0) return array; //default recursion case
    runs -= 1

    let len = Math.floor(array.length / 2) //midpoint of array
    if (array.length % 2 == 0) len -= 1 //moves midpoint 1 left if array is even length

    let ans = []  //variable to store folded array

    for (let i = 0; i <= len; i++) {
        if (i === array.length - i - 1) {//for an odd length array, if left and right are same index, push that element to array
            ans.push(array[i])
        }
        else {
            ans.push(array[i] + array[array.length - 1 - i])//push sum of mirrored elements to array
        }
    }


    return foldArray(ans, runs)//recursive call
}

    // if (array.length % 2 === 1) { //conditional if array is odd length

    //     middle_index = Math.floor(array.length / 2)//create variable for middle index of odd length array

    //     for (i = 0; i < middle_index; i++) {
    //         ans.push(array[i] + array[array.length - 1 - i])//sum mirrored elements and push to ans array
    //     }

    //     ans.push(array[middle_index])//finally push the middle index to end of folded array
    // }
    // else {

    //     let stop = array.length / 2 - 1 //stop is the index of the left of middle two elements of even length array
    //     for (let i = 0; i <= stop; i++) {
    //         ans.push(array[i] + array[array.length - 1 - i])//sum mirrored elements
    //     }
    // }

    // runs -= 1

    // if (runs === 0) {  //base condition for recursive calls (last fold has been performed)
    //     return ans;
    // }
    // else {
    //     return foldArray(ans, runs)//recursively call function while runs >0
    // }


console.log(foldArray([1, 2, 3, 4, 5], 1))
