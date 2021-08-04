function minSub(target, nums) {
    let short = Number.POSITIVE_INFINITY;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j <= nums.length; j++) {
            if (sum >= target) {
                if ((j - i) < short) {
                    short = j - i;
                }
                break;
            }
            sum += nums[j];
        }

    }
    return short !== Number.POSITIVE_INFINITY ? short : 0;
}

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
                console.log(winS)
                console.log(j,i)
                console.log(j - i + 1)
                sum = sum - nums[i];
                console.log(sum = sum - nums[i]);
                i++;

            }
            j++;
        }
    }
    return winS === Number.POSITIVE_INFINITY ? 0 : winS;
}

console.log(minSub(11, [1,2,3,4,5,6,7,8]))
console.log(another(11, [1,1,1,2,3,4,5]))


// var minSubArrayLen = function(target, nums) {
//     let short = Number.POSITIVE_INFINITY;
//     let sum = 0;
//      for (let i = 0; i < nums.length; i++) {
//          let count = 0;
//          sum = 0;
//          for (let j = i; j <= nums.length; j++) {
//              if (sum >= target) {
//                  if (count < short) {
//                      short = count;
//                  }
//                  break;
//              }
//              count++
//              sum += nums[j];
//          }
//      }
//      return short!==Number.POSITIVE_INFINITY ? short : 0;
//  };