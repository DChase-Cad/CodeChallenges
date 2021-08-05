//link to challenge: https://leetcode.com/problems/minimum-size-subarray-sum/
//finds the minimum length of concurrent numbers in an array that sum >= a given target or return 0 if it can't be achieved
//completed 8/3/2021

//my solution
function minSub(target, nums) {
    let short = Number.POSITIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j <= nums.length; j++) {
            if (sum >= target) {
                if ((j - i) < short) {
                    short = j - i;
                    j;
                    i;
                    console.log(short)
                }
                break;
            }
            sum += nums[j];
        }
    }
    return short !== Number.POSITIVE_INFINITY ? short : 0;
}

//sliding window solution -- intuitive solution that uses a window of elements to determine minimum length cutting down on iterations
//  ***** NOT MY SOLUTION ******   //
function another(tar, nums) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let winS = Number.POSITIVE_INFINITY;

    while (j < nums.length) {
        sum = sum + nums[j];
        if (sum < tar) {
            j++;
            console.log(j)
        }
        else {
            while (sum >= tar) {
                winS = Math.min(winS, j - i + 1);
                sum = sum - nums[i];
                console.log(sum = sum - nums[i]);
                i++;

            }
            j++;
        }
    }
    winS;
    return winS === Number.POSITIVE_INFINITY ? 0 : winS;
}

console.log(minSub(11, [1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1,,9,2,3,4,5,6,11]))
console.log(another(11, [1,4,9,2,11]))
