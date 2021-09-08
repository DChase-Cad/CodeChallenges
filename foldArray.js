function foldArray(array, runs) {
    if (!array.length) return [0]; //array is empty
    if (array.length === 1) return array; //array has 1 item
    let ans = []  //variable to store folded array

    if (array.length % 2 === 1) { //conditional if array is odd length

        middle_index = Math.floor(array.length/2)//create variable for middle index of odd length array

        for (i = 0; i < middle_index; i++) {
            ans.push(array[i] + array[array.length - 1 - i])//sum mirrored elements and push to ans array
        }

        ans.push(array[middle_index])//finally push the middle index to end of folded array
    }
    else {

        let stop = array.length/2-1 //stop is index to the left of middle two elements of even length array
        for(let i=0;i<=stop;i++){
            ans.push(array[i]+array[array.length-1-i])//sum mirrored elements
        }
    }

    runs-=1 
    
    if (runs === 0){  //base condition for recursive calls (last fold has been performed)
        return ans;
    }
    else{
        return foldArray(ans,runs)//recursively call function while runs >0
    }
}

console.log(foldArray([1, 2, 3, 4,5],2))
