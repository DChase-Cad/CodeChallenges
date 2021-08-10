//https://leetcode.com/problems/longest-palindromic-substring/
//searches a string and returns the longest palindromic substring


//Brute force
var longestPalindrome = function (s) {
    let longest = Number.NEGATIVE_INFINITY
    let start = 0;
    let end = 0;
    let j=0;
    

    for(let i=0;i<s.length;i++){
        console.log('longest',longest, j-i)
        j=i
        while(j<=s.length){
            let test=s.substring(i,j);
            
            console.log(j-i,`longest: ${longest}`)
            if(palin(test) && test.length>longest){
                longest=test.length;
                start=i;
                end=j;
            }
            j+=1;
        }
    }

    return s.substring(start,end);
};

function palin(string) {
    return string===string.split('').reverse().join('') ? true : false;
}


console.log(longestPalindrome('0982347423048racecar230980239480084932'));

console.log(palindrome('racecar'));

//other solution
function palindrome(string){
    const str=`@${string.split('').join('@')}@`
    console.log(str)
    
    let center=1;
    let window=0;
    const palindromes=[];

    for(let i=1;i<str.length;i++){
        console.log(window);
        let skip=1;

        endOfWindow=center+window;
        if(i<endOfWindow){
            console.log(2*center-i);
            skip=Math.min(palindromes[2*center-i],(endOfWindow-1))
        }

        const palindromesLength = getPalindromeLength(str,i,skip)
        palindromes[i]=palindromesLength;

        const endOfNewWindow = i+palindromesLength;

        if(endOfNewWindow > endOfWindow){
            center = 1;
            window=palindromesLength;
        }
    }

    const longest={
        start:0,
        length:1
    }

    palindromes.forEach((length,index)=>{
        if(length>longest.length){
            longest.start=(index-length)/2;
            longest.length=length;
        }
    })
    console.log(string.substring(longest.start,longest.length))
    return string.substr(longest.start,longest.length);
}

function getPalindromeLength(str,center,skip=0){
    let index = skip;

    while(
        center-index>=0
        && center + index <str.length
        && str[center+index] === str[center-index]
    ){
        index+=1
    }
    return index-1
}