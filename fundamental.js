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
// const produk = [
//   { id: 1, name: "Laptop", harga: 5000000 },
//   { id: 2, name: "Monitor", harga: 1500000 },
//   { id: 3, name: "Keyboard", harga: 300000 },
// ];

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

//coba cariin semua item yang sesuai dengan kondisi menggunakan filter
//menampilkan harga diatas 1000000
// const hasil = produk.filter(item => item.harga > 1000000);
// console.log(hasil);

//CRUD
//CREATE
//READ find-> mencari suatu item, validasi duplikat
// filter-> nyari beberapa item yang sesuai kondisi
//UPDATE findIndex->mengembalikan indeks pertama yg sesuai kondisi
//DELETE findIndex-> saat butuh update atau delete

//mengambil indeks dari item id 2
// const indeks = produk.findIndex(item => item.id === 2);
// console.log(indeks);

const mahasiswa = [
  { nim: "001", nama: "Andi", nilai: 85 },
  { nim: "002", nama: "Budi", nilai: 70 },
  { nim: "003", nama: "Citra", nilai: 90 },
  { nim: "004", nama: "Deni", nilai: 65 },
];

// 1. cari mahsiswa dengan nim 003
// 2. tampilkan mahasiswa yg nilainya >=75
// 3. hitung total semua nilai
