function balikKata(kata){
    //cara menggunakan method js
    //return kata.split("").reverse().join("");

    //cara menggunakan looping
    var test = "";
    for(var i = kata.length - 1; i >= 0; i --){
        test += kata[i];
    }
    return test;
}

console.log(balikKata('Halomoan'));
console.log(balikKata('Carel'));
