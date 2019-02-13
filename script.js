var numberList = [2,3,9,2,4,1,5,7];
document.getElementById("inArray").innerHTML = "Number in array is "+ numberList;

function asc() {
    numberList.sort(function (a, b) {return a-b});
    document.getElementById("asc").innerHTML = numberList; 
}

function desc() {
    numberList.sort(function (a, b) {return b-a});
    document.getElementById("desc").innerHTML = numberList;
} 

function delFun() {

    let numberList = [2,3,9,2,4,1,5,7];

    let x = parseInt(document.getElementById("deleteNum").value)

    numberList = numberList.filter((i)=> i!=x);
    
    document.getElementById("delFun").innerHTML = "Result is  "+ numberList;

} 
