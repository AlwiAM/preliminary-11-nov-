//array tipe data yang bisa menyimpan banyak data dalam urutan/index, index dimulai dari 0

//array basic
//membuat array
const buah = ["Apel", "Mangga", "Jeruk"];

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

const produk = [
  { id: 1, nama: "CPU", harga: 10000000 },
  { id: 2, nama: "Monitor", harga: 10000000 },
  { id: 3, nama: "Keyboard", harga: 300000 },
];

//menggunakan find
const hasil = produk.find((item) => item.id === 2);
console.log(hasil);
