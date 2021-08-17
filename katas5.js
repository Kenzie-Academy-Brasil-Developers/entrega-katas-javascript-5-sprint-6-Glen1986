// implemente aqui as funções de teste
let str = "hola mono"
let str1 = "Kenzie Academy" 
let str2 = "pato amarillo"
let arrayN = [2,7,4,1,5,6,3,8];
let array2 = [4,6,3,7,9,1,5,2];
let repeat = [2,2,4,6,1,3,3,7,8,5,5,5,3,2,4]

/////////////////////////////////////////////////////////////////////////////////////////////////
const reverseString = () =>{
   let newStr = str.split("").reverse().join("");
//   console.log(newStr)
   return newStr
}
reverseString();

function testeReverseString1(){
   const tests = [
      {
         "input":str,
         "expected_result": "onom aloh"
      },
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
//testeReverseString2();

/////////////////////////////////////////////////////////////////////////////////////////////////
const reverseSentence = () =>{
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
const minimumValue = () =>{
   let narr = arrayN.sort((a, b) => a > b);
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
const maximumValue = (arr) =>{
   let narr = arr.sort((a, b) => a < b);
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
const calculateRemainder = (arr) =>{
   const resto = arr.filter(n => n % 2 === 0)
   //console.log(resto)
   return resto
} 
calculateRemainder(arrayN);

function testCalculateRemainder1(){

   const tests = [
      {
         "input":arrayN,
         "expected_result":[8,6,4,2]
      },
      {
         "input":array2,
         "expected_result":[6,4,2]
      }
   ]
   tests.forEach((test) => console.assert(JSON.stringify(calculateRemainder(test.input)) === JSON.stringify(test.expected_result),
      {
         "function":"calculateRemainder",
         "expected": test.expected_result,
         "got" : calculateRemainder(test.input),
         "tested" : test.input
      }))
}
testCalculateRemainder1();

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




