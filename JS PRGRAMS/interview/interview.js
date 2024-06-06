// console.log("a", a);
// var a = null;
// let b = 20;
// function c() {
//   let d = 30;
//   console.log("d", d);
//   {
//     var z = 50;
//   }
//   console.log("z", z);
//   return "hi";
// }
// console.log("z", z); // ReferenceError: z is not defined
// c();
// console.log("a", a);

// console.log(a) //  Cannot access ‘a’ before initialization
// let a=10;

// console.log(a) //  Cannot access ‘a’ before initialization
// var a=10;

// c(); //hello
// function c(){
//     console.log("hello");
// }

// def(); //ReferenceError: Cannot access 'def' before initialization
// const def= function c(){
//     console.log("hi");
// }

// defv(); //TypeError: defv is not a function
// var defv= function d(){
//     console.log("Hai");
// }

// let a = 30;
// a(); //TypeError: a is not a function

// function test () {
//     console.log(a);
//      {
//      let a= 10
//      }
//   }
// test();  //a is not defined

// function test () {
//     console.log(a);
//      {
//      var a= 10
//      }
//   }
// test();  //undefined

// def(); //TypeError: def is not a function
// var def = function c() {
//     console.log("hi");
// };

// console.log("def", def); //def undefined
// var def = function c() {
//     console.log("hi");
// };
// console.log("def2", def);//def2 [Function: c]
// console.log("def3", def());//hi, and  def3 undefined

// function test () {
//      var a= 10;
// }
// console.log(a);
// test();  //a is not defined   (because a is inside the block scope)

// function test () {
//      var a= 10;  //also same answer for let a= 10;
//    {
//     console.log(a);
//     }
// }
// test();  //10

// function test () {
//      {
//      let a= 10
//      }
//     console.log(a);
//   }
// test();  //a is not defined

// var def = function c() {
//   console.log("hii");

//   return "Hello";
// };
// console.log("def", def());




// function isPalindrome(str) {
//     // Base case: if the string has 0 or 1 characters, it's a palindrome
//     if (str.length <= 1) {
//         return true;
//     }
    
//     // Check if the first and last characters are the same
//     if (str[0].toLowerCase() !== str[str.length - 1].toLowerCase()) {
//         return false;
//     }
    
//     // Recursively check the substring without the first and last characters
//     return isPalindrome(str.substring(1, str.length - 1));
// }

// // Example usage:
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false








function isPalindrome(str){
    if (str.length<=1){
        return true
    }

    if(str[0].toLowerCase() !== str[str.length-1].toLowerCase()){
        return false;
    }

    return isPalindrome(str.substring(1,str.length-1))
}


