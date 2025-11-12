//object digunakan untuk menyimpan banyak data dalam kunci dan nilai

//basic object

const mahasiswa = {
  nama: "Vino Aja",
  nim: "12345",
  ipk: 3.6,
  aktif: true,
};

//mengakses object
// console.log(mahasiswa.nama);
// console.log(mahasiswa["nim"]);

//menambah property
// mahasiswa.email = "vino@email.com";

// //merubah property
// mahasiswa.ipk = 3.7;

// //menghapus property
// delete mahasiswa.aktif;

// console.log(mahasiswa);

//value dari suatu object bisa berupa function
const kalkulator = {
  nilai: 0,
  tambah: function (angka) {
    this.nilai += angka;
    console.log(`Nilai sekarang: ${this.nilai}  `);
  },
};

kalkulator.tambah(5);


