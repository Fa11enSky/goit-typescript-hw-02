/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/
// Звідки мені знати там повідомлення може бути і число😁,
//  я би писав unknown але напишу string
function showMessage(message:string):void {
  console.log(message);
}

function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}

export {};