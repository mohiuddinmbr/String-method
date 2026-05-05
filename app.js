// ----- 1 -----

// function name(name){
//     console.log(`your name is ${name}`);
// }
// name("BALACH".toLocaleLowerCase())

// ---- 2 ----

// let greet = "hello"

// console.log(greet.toLocaleUpperCase());

// ---- 3 -----

// let xyz = "hello world"

// console.log(xyz.length);

// ------ 4 ------
// function id(name){
//     console.log(`first number of your name is ${name}`);
    
// }
// id("faraz".charAt(0))

// ---- 5 ---- 

// let js = "java script"

// console.log(js.length);
// console.log(js.charAt(11));

// ---- 6 -----

// let sentence = `an apple is very good for our health.`

// console.log(sentence.indexOf("apple"));

// ---- 7 -----


// let sentence = `an apple is very good for our health.`

// console.log(sentence.indexOf("very"));
// console.log(sentence.slice(12, 16));

// ------ 8 -----

// let sentence = `an apple is very good for our health.`

// console.log(sentence.replace("good" , "bad"));

// ----- 9 -----

// let sentence = `an apple is very good for our health.`

// console.log(sentence.replaceAll("e", "*"));

// ----- 10 -----

// let sentence = `an apple is very good for our health.`

// console.log(sentence.split(" "));

// ------ 11 -----

// let name = "mohiuddin"

// function chap(index){
//     return index.charAt(0).toLocaleUpperCase()  + index.slice(1)
// }
// console.log(chap(name));

// ---- 12 ----

// let sentence = `an apple is very good for our health.`

// function second(){
//     console.log(sentence.split("an apple"));
    
// }
// second()

// ----- 13 ----

// let bad = "dumb public"

// console.log(bad.replaceAll("dumb", "****"));

// ----- 14 -----

// let sentence = `an apple is very good for our health.`

// console.log(sentence.split(" ").length);

// ---- 15 -----

// let animal = 'the cat is very good pat'
// let result = animal.indexOf("cat") !== -1

// console.log(result);

// ------- 16 -------

// let email = 'mohiuddin123@gmail.com'

// let domain = email.slice(email.indexOf("@") + 1);

// console.log(domain);
//  16 # 2
// console.log(email.slice(12 ,22));

// ------ 17 ------

// let sentence = `an apple is very good for our health.`

// let arry = sentence.split(" ").reverse()

// console.log(arry.join(" ").toString());

// ----- 18 -----

// function check(word){
//     let com = word.split("").reverse().join("").toString()
//     console.log(com);
    
//     if (word === com){
//         return "yes it is the same when reversed"
//     }
//     else{
//         return "are not same"  
//     }
// }

// console.log(check("hello"));

// ----- 19 -----

// let sentence = `an apple is very good for our health.`
// let count = 0;

// for (let i = 0;i < sentence.length;i++){
//     if (sentence.charAt(i) === 'a'){
//         count++
//     }
    
// }
// console.log(count);

// ----- 21 -------

// let sentence =  `an apple is very good for our health.`

// let work = sentence.split(" ").map(index => index.charAt(0).toLocaleUpperCase() + index.slice(1))

// let result = work.join(" ").toLocaleString()

// console.log(result);

// ----- 23 --------

// let email = 'quetta2321@example.com';

// let work = email.split('@');
// console.log(work);

// let result = work[0].charAt(0)
// let result2 = work[1]

// console.log(result + '***@' +result2);

// ----- 25 -----

// let ABname = 'John Ronald Reuel Tolkien'
// let words = ABname.toLocaleUpperCase().split(' ')
// let result = ""

// for (let i = 0; i < words.length; i++) {
    
//     result += words[i].charAt(0) + ' . '
    
// }
// console.log(result);

// ----- 26 ------

// let check = (word1 , word2) =>{
//     wNo1 = word1.toLocaleLowerCase().split("").sort().join('')  
//     wNo2 = word2.toLocaleLowerCase().split("").sort().join('')  
    
    
    
//     if (wNo1 === wNo2){
//         return 'thay are anagram'
//     }else{
//         return 'thay are not anagram'
//     }
// }
// console.log(check('silent','listen'));

// ----- 27 ------

// ----- 28 ------

// let sentence =  `an apple is very good for our health`
// let result = sentence.split(' ');

// let result2 = result.map((item) =>{
//    return item.split('').reverse().join('')
// })
//     console.log(result2.join(' '));
    