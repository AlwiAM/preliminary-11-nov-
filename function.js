//function digunakan membungkus baris code

//bisa menggunakan parameter
//parameter adalah wadah nilai yang nanti dilempar ke dalam function
//nilai yang ditaruh di parameter disebut argumen

//bisa menggunakan return

//1.function declaration
function sapa(nama) {
  return `Halo ${nama}!`;
}

console.log(sapa("Afif"));
console.log(sapa("Afif"));

//2. function expression
const jumlah = function (a, b) {
  return a + b;
};

//3. arrow function
const kali = (a, b) => {
  return a * b;
};

daftarMahasiswa = [{ nama: "Adam", nim: 12345 }];
//validasi
function tambahMahasiwa(nim, nama, daftarMahasiswa) {
  //validasi nim sudah ada atau belum
  const sudahAda = daftarMahasiswa.find((mhs) => mhs.nim === nim);

  if (sudahAda) {
    throw new Error(`mahasiswa dengan nim ${nim} sudah ada`);
  }
}
