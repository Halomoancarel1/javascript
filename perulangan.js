function panggilPerulangan(){
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    //fungsi for
    //for (var i = 0; i<dataKota.length; i++){
    // console.log(dataKota[i]);
    // console.log(i);
    // console.log(dataKota);
    //}

    //fungsi foreach
    // dataKota.forEach((item, index, array) => {
    //     console.log(item);
    //     console.log(index);
    //     console.log(array);
    // });

    //fungsi map
    dataKota.map((item, index, array) =>{
        console.log(item);
        console.log(index);
        console.log(array);
    })
}

panggilPerulangan();