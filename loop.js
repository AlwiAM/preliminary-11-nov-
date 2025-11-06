//looping atau perulangan, melakukan suatu hal berulang kali sampai kondisi memenuhi

//for loop - perulangan tradisional
// const buah = ["apel", "blueberry", "mangga"];

// for (let i = 0; i < buah.length; i++) {
//   console.log(`Buah ke- ${i + 1}: ${buah[i]} `);
// }

//for of loop - lebih modern dan simpel
// for (const element of buah) {
//   console.log(element);
// }

//for each - perulangan dengan side effect seperti console.log, updatge, dll
// const produk = [
//   { id: 1, nama: "Laptop", harga: 5000000 },
//   { id: 2, nama: "Monitor", harga: 1500000 },
//   { id: 3, nama: "Keyboard", harga: 300000 },
// ];

// produk.forEach((item, index) => {
//   console.log(`No ${index + 1} ${item.nama} - Rp. ${item.harga}`);
// });

//map digunakan untuk transform array lama ke array baru
// const angka = [1, 2, 3, 4, 5];
// // mengalikan setiap nilai dari array lama dengan 2
// const hasil = angka.map((number) => number * 2);
// console.log(hasil);

const produk = [
  { id: 1, nama: "Laptop", harga: 5000000 },
  { id: 2, nama: "Monitor", harga: 1500000 },
  { id: 3, nama: "Keyboard", harga: 300000 },
];

const namaProduk = produk.map((item) => item.nama);
console.log(namaProduk);
console.log(produk);
