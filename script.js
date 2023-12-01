const data = require('./food.json');
//list all the food items
// console.log(data);

//list all the food items with category vegetables
function listVeges(data){
    var veges = data.filter(item => item.category === "Vegetable");
    return veges;
}

//list all the food items with category fruit
function listFruits(data){
    var fruits = data.filter((item)=>{
        return item.category === "Fruit"
    });
    return fruits;
}

// list all the food items with category protein
function listPro(data){
    var pro = data.filter((item)=>{
        return item.category === "Protein"
    });
    return pro;
}

// list all the food items with category nuts
function listNuts(data){
    var nuts = data.filter((item)=>{
        return item.category === "Nuts"
    });
    return nuts;
}

// list all the food items with category grains
function listGrains(data){
    var grains = data.filter(item => item.category === "Grain");
    return grains;
} 

// list all the food items with category dairy
function listDairy(data){
    var dairy = data.filter(item => item.category === "Dairy");
    return dairy;
} 

// list all the food items with calorie above 100
function calAbove(data){
    var calg = data.filter(item => item.calorie > 100);
    return calg;
}

// list all the food items with calorie below 100
function calBelow(data){
    var call = data.filter(item => item.calorie < 100);
    return call;
}

// list all the food items with highest protein content to lowest
function sortPro(data){
    var sortpro = data.sort((a,b) => b.protiens-a.protiens);
    return sortpro;
}

//list all the food items with lowest cab content to highest
function sortCab(data){
    var sortcab = data.sort((a,b) => a.cab-b.cab);
    return sortcab;
}

var sam = sortCab(data);
console.log(sam);

