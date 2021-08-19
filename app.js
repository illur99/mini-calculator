let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let add=document.querySelector("#add");
let sub=document.querySelector("#sub");
let mul=document.querySelector("#mul");
let div=document.querySelector("#div");
let result=document.querySelector("#result");


add.addEventListener("click",function(){
    let number1=parseInt(num1.value);
    let number2=parseInt(num2.value);
    result.innerHTML=addTwoNumbers(number1,number2);
})
sub.addEventListener("click",function(){
    let number1=parseInt(num1.value);
    let number2=parseInt(num2.value);
    result.innerHTML=subTwoNumbers(number1,number2);
})
mul.addEventListener("click",function(){
    let number1=parseInt(num1.value);
    let number2=parseInt(num2.value);
    result.innerHTML=mulTwoNumbers(number1,number2);
})
div.addEventListener("click",function(){
    let number1=parseInt(num1.value);
    let number2=parseInt(num2.value);
    result.innerHTML=divideTwoNumbers(number1,number2);
})


function addTwoNumbers(a,b)
{
    let addition=a+b;
    return addition ;
}
function subTwoNumbers(a,b)
{
    let substraction=a-b;
    return substraction ;
}
function mulTwoNumbers(a,b)
{
    let multiplication=a*b;
    return multiplication;
}
function divideTwoNumbers(a,b)
{
    let division=a/b;
    return division;
}