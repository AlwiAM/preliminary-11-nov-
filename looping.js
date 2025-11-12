//looping mengulangi baris program sampai kondisi tertentu terpenuhi

//for -> nilai awal, kondisi perulangan, iterasi
const buah = ["Apel", "Semangka", "Rambutan"];

//for loop biasa
// for (let i = 0; i < buah.length; i++) {
//   console.log(`Ini buah ${buah[i]}`);
// }

//while -> kondisi perulangan

// forEach
// buah.forEach((element) => console.log(element));

//for of
// for (const item of buah) {
//   console.log(item);
// }

//map digunakan untuk memodifikasi array
//case: kalikan setiap nilai array dengan 2
const nilai = [70, 80, 80];
//setiap nilai dikalikan dengan 2
const hasil = nilai.map((num) => num * 2);
console.log(hasil);

const produk = [
  { id: 1, nama: "CPU", harga: 10000000 },
  { id: 2, nama: "Monitor", harga: 1500000 },
  { id: 3, nama: "Keyboard", harga: 300000 },
];

// 1. cetak di console setiap nama produk
// 2. buatin array baru dari harga yg didiskon 25%
// 3. hitung total harga semua produk
