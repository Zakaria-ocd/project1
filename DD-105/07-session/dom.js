console.log(document.querySelector(".nom").value);
document.querySelector(".nom").value="Ahmed";
console.log(document.querySelector(".age").value);
console.log(typeof(document.querySelector(".age").value));
let a;
a=Number(document.querySelector(".number1").value);
let b;
b=Number(document.querySelector(".number2").value);
let c;
c=a+b
document.budy
document.querySelector(".number3").value=c;
if (a>20){
    document.querySelector(".number1").style.backgroundColor="orange";
}
if (b>20){
    document.querySelector(".number2").style.backgroundColor="orange";
}
// console.log(document.head)
// console.log(document.body)
// let calculeClick= function(e){
//     e.preventDefault();
//     console.log("You clicked me!");
// }
// document.querySelector(".btn-calculer").addEventListener("click",calculeClick);
// document.querySelector(".btn-calculer").
// addEventListener("click",function(e){
//     e.preventDefault();
//     console.log("You clicked me!");
// });
// document.querySelector(".btn-calculer").
// addEventListener("click",(e)=>{
//     e.preventDefault();
//     console.log("You clicked me!");
// });
let calculerF=(e)=>
{
    e.preventDefault();
    let n1 =Number(document.querySelector(".numberUn").value)
    let n2 =Number(document.querySelector(".numberDeux").value)
    document.querySelector(".somme").value=n1+n2
}
document.querySelector(".btn-calculer").
addEventListener("click",calculerF);