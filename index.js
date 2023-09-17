// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
    const cats1 = [...cats,"Broom"];
    return cats1;
}
function prependCat(){
    const cats2 = ["Arnold",...cats];
    return cats2;
}
function removeLastCat(){
    const cats3 = cats.slice(0,-1);
    // or cats.slice(0,cats.length-1) or cats.slice(0,2)
    return cats3;
}
function removeFirstCat(){
    const cats4 = cats.slice(1);
    return cats4;
}
