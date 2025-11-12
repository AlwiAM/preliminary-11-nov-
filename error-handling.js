//error handling safety net, digunakan untuk menghandle program ketika ada sesuatu yang salah agar programnya tidak crash

//defensif programming pendekatan permrograman yang mengantisipasi adanya eror

//throw melemparkan eror
//try menandai bagian yang mungkin eror
//cath menangkap eror

function bagi(a, b) {
  if (b === 0) {
    throw new Error("Tidak bisa membagi dengan 0!!!");
  }
  return a / b;
}

try {
  console.log(bagi(10, 0));
} catch (error) {
  console.log("Terjadi kesalahan:", error.message);
}

console.log("Program tetap berjalan");

