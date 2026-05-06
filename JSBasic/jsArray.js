let arr=[12,32,42,44,49,89,65,28];
for(var i =0; i <arr.length;i++)
{
    console.log(arr[i]);
}
console.log(arr);

arr[2] =arr[2]+10;
console.log(arr);


console.log(arr.includes(44));
console.log(arr.at(4));

arr.push(99);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift();
console.log(arr);

arr.shift();
console.log(arr);


console.log(arr.indexOf(44));

arr=[];
console.log(arr);


let unarr=[93,49,73,42,43,86,74,5,89,2];
unarr.forEach((element)=>{
    console.log(element);
});


console.log(unarr);
unarr.sort();
console.log(unarr);