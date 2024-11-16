
let n1=document.querySelector(".number1");
let n2=document.querySelector(".number2");
let x= document.querySelector(".result");
let btn=document.querySelector(".btn");


btn.addEventListener("click", function() {
    let d=add(n1,n2);
   
    return d
});
 x.innerHTML=d;
function add(a,b) {
    return a+b
    
}