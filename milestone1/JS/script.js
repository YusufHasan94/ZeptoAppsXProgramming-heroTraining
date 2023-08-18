var newBtn = document.getElementById('newBtn');
newBtn.addEventListener("click",function(){
    alert("Btn clicked");
})

var x = 10; 
var y = "hello";

console.log(typeof x ,'&', typeof y);

let new_arr = [10, 50, 52, 55];
console.log(new_arr);

for(let i=0; i<new_arr.length; i++){
    console.log(new_arr[i]);
}

const globalSpace = "Stay into in global";
console.log(globalSpace);

function newFun(){
    const newWords = "stay in local space";
    return newWords;
}
console.log(newFun());