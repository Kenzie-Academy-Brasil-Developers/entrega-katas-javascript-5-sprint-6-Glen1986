// implemente aqui as funções de teste
function testeReverseString1() {
   let result = reverseString("Kenzie Academy");
   let expected = "ymedacA eizneK";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
function testeReverseString2() {
   let result = reverseString("Pato Amarillo");
   let expected = "olliramA otaP";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
