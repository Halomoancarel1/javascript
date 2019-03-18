function panggilSplice(){
  var kota = ['Jakarta', 'Medan', 'Padang', 'Malang'];
  console.log(kota);
  //kota.splice(2,0,'Palembang')
  kota.splice(2,1);
  return kota
}

console.log(panggilSplice())
