// implemente aqui as funções de teste
let a;
let b;
let str = "";
let str1 = "Kenzie Academy"; 
let str2 = "Pato Amarillo";
let arrayN = [2,7,4,1,5,6,3,8];
let array2 = [4,6,3,7,9,1,5,2];
let repeat = [2,2,4,6,1,3,3,7,8,5,5,5,3,2,4]

/////////////////////////////////////////////////////////////////////////////////////////////////
function reverseString(){
   let newStr = str1.split("").reverse().join("");
   return newStr
}
reverseString(str1);

function testeReverseString1(){
   const tests = [
     {
         "input":str1,
         "expected_result": "ymedacA eizneK"
      }
   ]
   tests.forEach((test) => console.assert(JSON.stringify(reverseString(test.input)) === JSON.stringify(test.expected_result),
      {
         "function":"reverseString",
         "expected": test.expected_result,
         "got" : reverseString(test.input),
         "tested" : test.input
      }))
}

testeReverseString1();

function testeReverseString2() {
   let result = reverseString("Pato Amarillo");
   let expected = "olliramA otaP";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString2();

/////////////////////////////////////////////////////////////////////////////////////////////////
const reverseSentence = (str) =>{
  let newStr = str.split(" ").reverse().join(" ");
//   console.log(newStr)
   return newStr;
} 
 reverseSentence(str);

function test_reverseSentence1() {
      let result = reverseSentence("hola mono");
      let expected = "mono hola";
      console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
test_reverseSentence1();

function test_reverseSentence2() {
      let result = reverseSentence("hola mono");
      let expected = "mono hola";
      console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
test_reverseSentence2();
 
/////////////////////////////////////////////////////////////////////////////////////////////////
function minimumValue(arrayN) {
   let narr = arrayN.sort((a,b) => a - b);
   return narr[0]
}
minimumValue(arrayN)

function testMinimumValue1(){
    const tests = [
        {
            "input": arrayN,
            "expected_result": 1
        }
    ]
 tests.forEach((test) => console.assert(JSON.stringify(minimumValue(test.input)) === JSON.stringify(test.expected_result),
             {
               "Function": "minimumValue",
               "expected": test.expected_result,
               "got": minimumValue(test.input),
               "tested": test.input
              }))
}
testMinimumValue1();

function testMinimumValue2(){
    const tests = [
        {
            "input": array2,
            "expected_result": 1
        }
    ]
 tests.forEach((test) => console.assert(JSON.stringify(minimumValue(test.input)) === JSON.stringify(test.expected_result),
        {
            "Function": "minimumValue",
            "expected": test.expected_result,
            "got": minimumValue(test.input),
            "tested": test.input
        }))
}
testMinimumValue2();

/////////////////////////////////////////////////////////////////////////////////////////////////
const maximumValue = (array2) =>{
   let narr = array2.sort((a, b) => b - a);
   return narr[0]
}
maximumValue(array2)

function testMaximumValue1(){
   const tests = [
      {
         "input":arrayN,
         "expected_result": 8
      }
   ]
   tests.forEach((test) => console.assert(JSON.stringify(maximumValue(test.input)) === JSON.stringify(test.expected_result),
      {
         "function":"maximumValue",
         "expected": test.expected_result,
         "got" : maximumValue(test.input),
         "tested" : test.input
      }))
}
testMaximumValue1();

function testMaximumValue2(){
   const tests = [
      {
         "input":array2,
         "expected_result": 9
      }
   ]
   tests.forEach((test) => console.assert(JSON.stringify(maximumValue(test.input)) === JSON.stringify(test.expected_result),
      {
         "function":"maximumValue",
         "expected": test.expected_result,
         "got" : maximumValue(test.input),
         "tested" : test.input
      }))
}
testMaximumValue2();

/////////////////////////////////////////////////////////////////////////////////////////////////
const calculateRemainder = (a,b) =>{
  return Number(a) % Number(b);
} 
calculateRemainder(a,b);

function testCalculateRemainder1 () {
   let result = calculateRemainder(4, 2);
   let expected = 0;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder1();

function testCalculateRemainder2 () {
   let result = calculateRemainder(5, 2);
   let expected = 1;
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testCalculateRemainder2();
////////////////////////////////////////////////////////////////////////////////////
const distinctValues = () => {
let newArr = [];
   for (let i = 0; i < repeat.length; i++){
      if(!newArr.includes(repeat[i])){
         newArr.push(repeat[i])
      }
   }
return newArr;
}
 distinctValues(repeat);

function testDistinctValues1(){
   let result = distinctValues([2,2,4,6,1,3,3,7,8,5,5,5,3,2,4]);
   let expected = [2, 4, 6, 1, 3, 7, 8, 5];
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}


/*
const distinctValues = () =>{
  console.log(repeat)
   let total = [];
   for (let i = 0; i < repeat.length; i++){
      total.push(repeat[i]);
   }
 //  console.log(total.reduce(i.index() === 1))
}
distinctValues(repeat)
function testDistinctValues1(){

   const tests = [
      {
         ////////
      }
      ]
   tests.forEach((test) => console.assert(JSON.stringify(distinctValues(test.input)) === JSON.stringify(test.expected_result),
      {
         "function":"distinctValues",
         "expected": test.expected_result,
         "got" : distinctValues(test.input),
         "tested" : test.input
      }))
}
*/



