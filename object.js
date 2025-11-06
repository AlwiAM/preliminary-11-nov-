//object tipe data untuk menyimpan banyak data. dalam key dan value
//nama : adam
//alamat : jakarta

const mahasiswa = {
  nama: "Budi",
  nim: "12345",
  ipk: 3.5,
  aktif: true,
};

//cara akses property
// console.log(mahasiswa.nama);
// console.log(mahasiswa["nim"]);

// //menambah property
// mahasiswa.email = "budi@mail.com";

// //mengubah property
// mahasiswa.ipk = 3.9;

// //menghapus property
// delete mahasiswa.aktif;

// console.log(mahasiswa);

//this artinya mengacu pada object saat ini
//template literal cara untuk menampilkan nilai di console dengan backtick (`) 
const kalkulator = {
  nilai: 0,
  tambah: function (angka) {
    this.nilai += angka;
    console.log(`Nilai sekarang: ${this.nilai} rupiah`);
    console.log("Nilai sekarang ", this.nilai, "rupiah");
  },
};



//buat function hitungDiskon(harga, persenDikson) 
// 1. validasi nilai harga harus > 0
// 2. validasi persenDiskon harus diantara 1-100
// 3. jika semua valid, hitung harga setelah diskon



