function isPalindrome(str:string):boolean{
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(str.charAt(left)!=str.charAt(right)){
            return false;
        }
        else{
            left++;
            right--;
        }
    }
    return true;
}
console.log(isPalindrome("aba"));