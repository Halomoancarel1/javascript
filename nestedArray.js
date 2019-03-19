//susah jirrr hahahha no 46

function panggilNestedArray(value){
    var test = [];
    var array1 = value[0];
    var array2 = value[1];
    var array3 = value[2];
    var arrayDone1 = '';

    var i, j;

    for (i = 0; i < value.length; i++) {
        for (j = 0; j < value[i].length; j++) {
            do whatever with value[i][j];
        }
    }

    // for(var a = 0; a< value.length; a++){
    //     // console.log('id: ', value[a][0]);
    //     // console.log('name: ', value[a][1]);
    //     // console.log('company: ', value[a][2]);
    //     // console.log('\n');
    //     test.push(value[a][a])
    // }

}

var nestedArray = [
    // [1, 'Mark Zuckerberg', 'Facebook'],
    // [2, 'Elon Musk', 'Tesla'],
    // [3, 'Bill Gates', 'Microsoft'],
    // [4, 'Steve Jobs', 'Apple']
    [1,2,3,4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray);