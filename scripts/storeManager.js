function saveItems(item){
    console.log(item); 
let val = JSON.stringify(item);
console.log(val);
localStorage.setItem("Facultades",val);
}