//             Sheikh Jibran Ahmed          \\
/*Explain data types: The type of data that can be stored and manipulated within a program */
//String
var user_name = 'Sheikh Jibran Ahmed';
console.log(user_name);
//Number
var user_contact = 300170000;
console.log(user_contact);
//Boolean
var alreadyAreMember = true;
console.log(alreadyAreMember);
//Undefined
var inFutureDefineValue;
console.log(inFutureDefineValue);
//null
var emptyVariable = null;
console.log(emptyVariable);
//Symbol
var uniqueValue = Symbol('description');
console.log(uniqueValue);
//Bigint
var largeNumber = BigInt(12345678901234567890);
var secondLargeNumber = BigInt(3241284147812841);
console.log(largeNumber * secondLargeNumber);
// Print all values of our variables
console.log('User name : ' + user_name +
    '\n' + 'Contact : ' + user_contact +
    '\n' + 'Already our member? ' + alreadyAreMember);
