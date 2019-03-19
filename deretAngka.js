function deretAngka(n){
    var test = '';
    for(var a = 1; a<= n; a++){
        if(a % 3 === 0){
            test += 'NIO ';
        }
        else if(a % 5 === 0){
            test += 'MIC ';
        }else{
            test += a+' ';
        }
    }
    return test;
}

console.log(deretAngka(10));