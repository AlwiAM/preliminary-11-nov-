//eror handling sebagai safety net. jika ada kesalahan program, program tidak crash
//defensif programming. pendekatan programing untuk menghindari error sebelum eror itu ada

//try -> mengecek logika program yg mungkin eror
//catch -> menangkap eror
//throw -> melempar eror

// function bagi(a, b) {
//   if (b === 0) {
//     throw new Error("Tidak bisa membagi dengan 0!");
//   }
//   return a / b;
// }

// try {
//   console.log(bagi(10, 2));
//   console.log(bagi(10, 0));
//   console.log("Baris ini tidak dijalan");
// } catch (error) {
//   console.log("Terjadi kesalahan:", error.message);
// }
// console.log("Program masih berjalan");

const inventaris = {
  data: [],
  tambahBarang: function (id, nama, stok, harga) {
    //1. validasi duplikasi id
    const sudahAda = this.data.find((item) => item.id === id);
    if (sudahAda) {
      throw new Error(`Barang dengan id ${id} sudah ada`);
    }

    //2. jika valid, tambahkan ke data[]
    this.data.push({ id, nama, stok, harga });
    console.log(`Barang ${nama} berhasil ditambahkan`);
  },
};

try {
  inventaris.tambahBarang("B001", "Buku", 100, 5000);
  inventaris.tambahBarang("B001", "Pensil", 50, 2000);
} catch (error) {
  console.log(error.message);
}

//buatkan object sistemMahasiswa, dengan property
// data -> menyimpan data mahasiwa
// method tambah(nim, nama, ipk)
// cariBerdasarkanNama(nama)
// hitungRataIpk() -> menghitung keseluruhan rata2 mahasiswa
//terapkan validasi pada method diatas





