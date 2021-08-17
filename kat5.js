// implemente aqui as funções de teste
let str = "hola mono";
const reverseString = (str) =>{
   let newStr = str.reverse()
   console.log(newStr)
   return newStr
}
reverseString();

function testeReverseString1() {
   let result = reverseString("Kenzie Academy");
   let expected = "ymedacA eizneK";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString1();
function testeReverseString2() {
   let result = reverseString("Pato Amarillo");
   let expected = "olliramA otaP";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString2();
function testMinimumValue1(){
   let result = array.sort((a,b) => a + b);
   let expected= array[0];
   console.assetr(result === expected; `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue1();
function testMinimumValue2(){
   let result = array.sort((a,b) => b + a);
   let expected = array[0];
   console.assetr(result === expected; `esperado: ${expected}, obtido: ${result}`)
}
testMinimumValue2()
function testCalculateRemainder1(){
   let result = [1,2,3,4,5,6].filter(n => n % 2 === 0);
   let expected = [2,4,6]; 
   console.assetr(result === expected; `esperado: ${expected}, obtido: ${result}`)
}
function testCalculateRemainder2(){
   let result = [1,2,3,4,5,6].filter(n => n % 2 !== 0);
   let expected = [1,3,5]; 
   console.assetr(result === expected; `esperado: ${expected}, obtido: ${result}`)
}
// 6 ///////////////
function testDistinctValues1(){
   let result = "1 3 5 3 7 3 1 1 5" ;
   let expected = "1 3 5 7"; 
   console.assetr(result === expected; `esperado: ${expected}, obtido: ${result}`)
}
function testDistinctValues2(){
   let result = "1 3 5 3 7 3 1 1 5"

}  
// 7 ////////////////////
function testCountValues1(){

} 
function testCountValues2(){

}
// 8 ////////////////////
function testEvaluateExpression1() {
   let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
   let expected = -3
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testEvaluateExpression2(){

}
