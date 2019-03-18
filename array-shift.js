function panggilShift(){
  var kota = ['Jakarta', 'Malang', 'Surabaya', 'Makassar'];
  console.log(kota);
  kota2 = kota.shift();
  console.log(kota2);
  return kota;
}


console.log(panggilShift())
