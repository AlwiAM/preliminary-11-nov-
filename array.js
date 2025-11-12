//array tipe data yang bisa menyimpan banyak data dalam urutan/index, index dimulai dari 0

//array basic
//membuat array
// const buah = ["Apel", "Mangga", "Jeruk"];

//mengakses array
// console.log(buah[1]);
// console.log(buah[2]);

//mengecek panjang array
// console.log(buah.length);

//menambah elemen
// buah.push("Pisang"); //tambah di akhir
// buah.unshift("Anggur"); // tambah di awal

//menghapus elemen
// buah.pop(); //menghapus di akhir
// buah.shift();//menghapus di awal

//array of object
// const produk = [
//   { id: 1, nama: "CPU", harga: 10000000 },
//   { id: 2, nama: "Monitor", harga: 10000000 },
//   { id: 3, nama: "Keyboard", harga: 300000 },
// ];

// find method mencari item pertama yang sesuai kondisi
// const produk = [
//   { id: 1, nama: "CPU", harga: 10000000 },
//   { id: 2, nama: "Monitor", harga: 10000000 },
//   { id: 3, nama: "Keyboard", harga: 300000 },
// ];

//menampilkan id 2

//menggunakan for loop
//1. melakukan pembacaan seluruh data array
//2. menyeleksi nilai array yang id = 2
//3. kembalikan nilai array yang sesuai
//4. tampilkan hasil

// function menampilkanId(idParam) {
//   for (let i = 0; i < produk.length; i++) {
//     if (produk[i].id === idParam) {
//       return produk[i]; //kalau ketemu langsung return
//     }
//   }
//   return undefined; //tidak ketemu
// }
// const hasil = menampilkanId(2);
// console.log(hasil);

// const produk = [
//   { id: 1, nama: "CPU", harga: 10000000 },
//   { id: 2, nama: "Monitor", harga: 10000000 },
//   { id: 3, nama: "Keyboard", harga: 300000 },
// ];

// //menggunakan find
// const hasil = produk.find((item) => item.id === 2);
// console.log(hasil);

//filter method yang mengembalikan semua nilai yang memenuhi kondisi
// filter akan mencari semua item di array yang sesuai kondisi, lalu mengembalikan array
const produk = [
  { id: 1, nama: "CPU", harga: 10000000 },
  { id: 2, nama: "Monitor", harga: 1500000 },
  { id: 3, nama: "Keyboard", harga: 300000 },
];

//menampilkan produk yang harganya diatas sejuta
// const diatasSejuta = produk.filter((item) => item.harga > 1000000);
// console.log(diatasSejuta);

//menggunakan for loop

//1. menyiapkan array kosong sebagai penampung nilai
//2. melakukan pembacaan seluruh data array
//3. menyeleksi nilai array yang harga diatas sejuta
//4. jika kondisi memenuhi masukan nilai ke dalam array yang sudah disiapkan
//5. tampikan hasilnya

// function diatasSejutaLoop() {
//   const hasil = [];
//   for (let i = 0; i < produk.length; i++) {
//     if (produk[i].harga > 1000000) {
//       hasil.push(produk[i]);
//     }
//   }
//   return hasil;
// }

// const tampilkanHasil = diatasSejutaLoop();
// console.log(tampilkanHasil);

//CREATE
//READ
//UPDATE
//DELETE

//1. cari berdasarkan kondisi 
//2. kalau ketemu baru diupdate
//3. tampilkan data baru

//1. cari berdasarkan kondisi 
//2. kalau ketemu baru didelete
//3. tampilkan konfirmasi berhasil dihapus



