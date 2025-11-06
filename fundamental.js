//1. programing itu problem solving
//2. errror adalah teman kita
//3. practice

//variable -> wadah atau tempat menyimpan
let umur = 25; // bisa diubah
const email = "budi@gmail.com"; //tidak bisa diubah
var nama = "budi"; // cara lama

//tipe data primitive
let angka = 100; //number
let teks = "Hello"; // string
let benar = true; //boolean
let kosong = null; //tipe data Null sengaja dikosongin
let belumdiisi; //undefined (belum dikasih nilai)

//tipe data kompleks
let array = [1, 2, 3]; //array
let object = { name: "Budi" }; //object

//secara default gunakan const

//array tipe data yang bisa menyimpan banyak data menggunakan index

const buah = ["apel", "jeruk", "mangga"];

//akses elemen
// console.log(buah[0]);
// console.log(buah[1]);

// mengecek panjang array
// console.log(buah.length);

//menambahkan elemen
// buah.push("Pisang") //menambah di akhir
// buah.unshift('Anggur') //menambah di awal

//menghapus elemen
// buah.pop(); // menghapus di akhir
// buah.shift(); //menghapus di

// array of object
const produk = [
  { id: 1, name: "Laptop", harga: 5000000 },
  { id: 2, name: "Monitor", harga: 1500000 },
  { id: 3, name: "Keyboard", harga: 300000 },
];

//mencari item pertama yang sesuai kondisi menggunakan find

//konsep apa
//kapan dipake

//mencari produk yg idnya 2
// const hasil = produk.find((item) => item.id === 2);
// console.log(hasil);

//menggunakan loop
// function menggunakanLoop(searchId) {
//     for (let i = 0; i <produk.length; i++) {
//         if (produk[i].id === searchId) {
//             return produk[i] //kalau ketemu langsung return
//         }
//     }
// return undefined;//kalau tidak ketemu
// }

// const hasil = menggunakanLoop(3);
// console.log(hasil);


