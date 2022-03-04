//Functions -> sets of instructions -> paramters and arguments -> paramters make your functions reusable

//Easy

function subTwoNumsAndAlert(n1,n2){
    alert(n1-n2);
}
//subTwoNumsAndAlert(10,5)

function dividesThreeNumsAndLogs(a,b,c){
    console.log(a/b/c); 
}
//dividesThreeNumsAndLogs(100,10,2)

function multiplieThreeNumsAndReturn(a,b,c){
    return a*b*c;
}
//let product = multiplyThreeNumsAndReturn(100,10,2)
//alert(product);

//Medium

function addTwoAndDivide(a,b,c){
    return (a+b)%c;
}
//addTwoAndDivide(100,200,10)
