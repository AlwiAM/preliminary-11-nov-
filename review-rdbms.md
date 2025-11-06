# 📚 Materi Review Bootcamp - Persiapan Challenge Day
 |SQL FUNDAMENTAL 

## 2.0 PostgreSQL Command Line (psql) - Quick Start 

### Akses psql via Command Line

**Windows:**
```bash
# Cara 1: Lewat Start Menu
Start Menu → PostgreSQL → SQL Shell (psql)

# Cara 2: Via Command Prompt
psql -U postgres
# Masukkan password yang sudah di-set
```

**Mac/Linux:**
```bash
psql -U postgres
```

**Jika berhasil, akan muncul:**
```
psql (15.x)
Type "help" for help.

postgres=#
```

---

### PostgreSQL Meta-Commands (Backslash Commands)

| Command | Fungsi | Contoh Output |
|---------|--------|---------------|
| `\l` atau `\list` | List semua database | postgres, template0, template1 |
| `\c nama_db` | Connect/switch ke database | `\c bootcamp_review` |
| `\dt` | List semua tabel di database aktif | produk, pelanggan, pesanan |
| `\d nama_tabel` | Describe struktur tabel | Kolom, tipe data, constraint |
| `\d+ nama_tabel` | Describe tabel + info tambahan | Termasuk indexes, triggers, dll |
| `\du` | List semua users/roles | postgres, admin, dll |
| `\dn` | List semua schema | public, pg_catalog |
| `\df` | List semua functions | User-defined functions |
| `\q` | Quit/keluar dari psql | - |
| `\?` | Help semua meta-commands | Daftar command lengkap |
| `\h COMMAND` | Help untuk SQL command tertentu | `\h SELECT` |
| `\i file.sql` | Execute SQL dari file | `\i setup.sql` |
| `\o file.txt` | Output query ke file | `\o hasil.txt` |
| `\timing` | Toggle timing execution | Query time: 45.123 ms |

---

### Hands-On: Setup Database untuk Latihan

**Step 1: Buat Database Baru**
```sql
-- Di psql prompt
postgres=# CREATE DATABASE bootcamp_review;
CREATE DATABASE

postgres=# \l
                                  List of databases
      Name        |  Owner   | Encoding | Collate | Ctype | Access privileges
------------------+----------+----------+---------+-------+-------------------
 bootcamp_review  | postgres | UTF8     | ...     | ...   |
 postgres         | postgres | UTF8     | ...     | ...   |
```

**Step 2: Connect ke Database**
```sql
postgres=# \c bootcamp_review
You are now connected to database "bootcamp_review" as user "postgres".

bootcamp_review=#
```

**Step 3: Verifikasi Database Aktif**
```sql
bootcamp_review=# SELECT current_database();
 current_database
------------------
 bootcamp_review
(1 row)
```

---

### Tips Menggunakan psql

**1. Auto-complete dengan Tab**
```sql
bootcamp_review=# SE[TAB]
-- Auto-complete jadi SELECT

bootcamp_review=# SELECT * FROM pel[TAB]
-- Auto-complete jadi pelanggan (kalau tabel ada)
```

**2. History Command (Arrow Up/Down)**
- **Arrow Up**: Command sebelumnya
- **Arrow Down**: Command selanjutnya
- **Ctrl + R**: Reverse search history

**3. Multi-line Query**
```sql
bootcamp_review=# SELECT *
bootcamp_review-# FROM produk
bootcamp_review-# WHERE harga > 100000;
```
Prompt berubah jadi `-#` = masih dalam mode input query

**4. Cancel Query**
- **Ctrl + C**: Cancel query yang sedang jalan
- **;**: Setiap query harus diakhiri titik koma

**5. Clear Screen**
```sql
bootcamp_review=# \! cls    -- Windows
bootcamp_review=# \! clear  -- Mac/Linux
```

---

### Troubleshooting psql

**Problem 1: `psql: command not found`**
```bash
Solusi (Windows):
1. Add PostgreSQL ke PATH:
   - Cari folder: C:\Program Files\PostgreSQL\15\bin
   - System Properties → Environment Variables → Path
   - Tambahkan path tersebut
2. Restart Command Prompt
```

**Problem 2: `FATAL: password authentication failed`**
```bash
Solusi:
1. Pastikan pakai password yang benar saat install
2. Atau reset password:
   - Windows: services.msc → PostgreSQL → Properties → Log On
   - Atau reinstall PostgreSQL
```

**Problem 3: `psql: could not connect to server`**
```bash
Solusi:
1. Cek service PostgreSQL running:
   - Windows: services.msc → PostgreSQL → Start
   - Mac: brew services start postgresql
   - Linux: sudo service postgresql start
2. Cek port 5432 tidak bentrok
```

---

> **Petunjuk Praktek SQL:**
> 1. Pastikan PostgreSQL sudah running
> 2. Buka psql atau GUI tool (pgAdmin / VS Code extension)
> 3. Buat database: `bootcamp_review`
> 4. Ketik ulang setiap query (JANGAN copy-paste!)
> 5. Gunakan `\d`, `\dt`, `\d+ nama_tabel` untuk explore
> 6. Perhatikan hasil output

---

## 2.1 Database & RDBMS Intro (5 menit)

### Konsep Awam
Database itu seperti **lemari arsip raksasa**:
- Setiap laci = **Table**
- Setiap folder = **Row/Record**
- Setiap field dalam folder = **Column**

RDBMS (Relational Database Management System) = Software untuk kelola database (PostgreSQL, MySQL, dll)

### Struktur Database
```
Database: toko_online
├── Table: pelanggan
│   ├── Column: pelanggan_id
│   ├── Column: nama
│   └── Column: email
└── Table: pesanan
    ├── Column: pesanan_id
    ├── Column: pelanggan_id (Foreign Key)
    ├── Column: tanggal_pesan
    └── Column: total_harga
```

### Jenis-jenis SQL Command
1. **DDL (Data Definition Language)**: Struktur database
   - `CREATE TABLE` → Buat tabel
   - `ALTER TABLE` → Ubah struktur tabel
   - `DROP TABLE` → Hapus tabel

2. **DML (Data Manipulation Language)**: Manipulasi data
   - `INSERT` → Tambah data
   - `UPDATE` → Ubah data
   - `DELETE` → Hapus data

3. **DQL (Data Query Language)**: Query data
   - `SELECT` → Ambil/baca data

---

## 2.2 DDL - Membuat Struktur Database + Dummy Data (25 menit)

### Hands-On: Buat Database E-Commerce Sederhana

Kita akan buat sistem e-commerce dengan 3 tabel + relasi + populate data dummy!

---

### Step 1: CREATE TABLE - Bikin Tabel Baru

#### Analogi
Seperti membuat **form kosong** dengan field-field yang sudah ditentukan.

#### Syntax
```sql
CREATE TABLE nama_tabel (
    kolom1 TIPE_DATA CONSTRAINT,
    kolom2 TIPE_DATA CONSTRAINT,
    ...
);
```

#### Hands-On: Buat Tabel Pertama - Pelanggan

```sql
-- Jalankan di psql atau GUI tool
CREATE TABLE pelanggan (
    pelanggan_id SERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    kota VARCHAR(50),
    tanggal_daftar DATE DEFAULT CURRENT_DATE
);

-- Cek struktur tabel
\d pelanggan
```

**Output:**
```
                                      Table "public.pelanggan"
     Column      |          Type          | Nullable |                   Default
-----------------+------------------------+----------+---------------------------------------------
 pelanggan_id    | integer                | not null | nextval('pelanggan_pelanggan_id_seq'::regclass)
 nama            | character varying(100) | not null |
 email           | character varying(100) | not null |
 kota            | character varying(50)  |          |
 tanggal_daftar  | date                   |          | CURRENT_DATE
Indexes:
    "pelanggan_pkey" PRIMARY KEY, btree (pelanggan_id)
    "pelanggan_email_key" UNIQUE CONSTRAINT, btree (email)
```

---

#### Hands-On: Buat Tabel Kedua - Produk

```sql
CREATE TABLE produk (
    produk_id SERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    kategori VARCHAR(50) NOT NULL,
    harga DECIMAL(10, 2) NOT NULL CHECK (harga > 0),
    stok INTEGER DEFAULT 0 CHECK (stok >= 0),
    tanggal_dibuat DATE DEFAULT CURRENT_DATE
);

-- Cek tabel yang sudah dibuat
\dt
```

**Output:**
```
          List of relations
 Schema |    Name    | Type  |  Owner
--------+------------+-------+----------
 public | pelanggan  | table | postgres
 public | produk     | table | postgres
```

---

#### Hands-On: Buat Tabel Ketiga - Pesanan (dengan Foreign Key)

```sql
CREATE TABLE pesanan (
    pesanan_id SERIAL PRIMARY KEY,
    pelanggan_id INTEGER NOT NULL,
    produk_id INTEGER NOT NULL,
    jumlah INTEGER NOT NULL CHECK (jumlah > 0),
    total_harga DECIMAL(10, 2) NOT NULL,
    tanggal_pesan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'Pending',

    -- Foreign Keys
    CONSTRAINT fk_pelanggan
        FOREIGN KEY (pelanggan_id)
        REFERENCES pelanggan(pelanggan_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_produk
        FOREIGN KEY (produk_id)
        REFERENCES produk(produk_id)
        ON DELETE RESTRICT
);

-- Cek detail tabel termasuk FK
\d+ pesanan
```

---

### Step 2: INSERT - Populate Data Dummy

#### Insert Data Pelanggan

```sql
INSERT INTO pelanggan (nama, email, kota) VALUES
('Budi Santoso', 'budi@mail.com', 'Jakarta'),
('Citra Dewi', 'citra@mail.com', 'Bandung'),
('Ahmad Fauzi', 'ahmad@mail.com', 'Surabaya'),
('Dewi Lestari', 'dewi@mail.com', 'Jakarta'),
('Eko Prasetyo', 'eko@mail.com', 'Yogyakarta');

-- Verify data
SELECT * FROM pelanggan;
```

**Output:**
```
 pelanggan_id |     nama      |     email      |    kota    | tanggal_daftar
--------------+---------------+----------------+------------+----------------
            1 | Budi Santoso  | budi@mail.com  | Jakarta    | 2024-11-05
            2 | Citra Dewi    | citra@mail.com | Bandung    | 2024-11-05
            3 | Ahmad Fauzi   | ahmad@mail.com | Surabaya   | 2024-11-05
            4 | Dewi Lestari  | dewi@mail.com  | Jakarta    | 2024-11-05
            5 | Eko Prasetyo  | eko@mail.com   | Yogyakarta | 2024-11-05
(5 rows)
```

---

#### Insert Data Produk

```sql
INSERT INTO produk (nama, kategori, harga, stok) VALUES
('Laptop ASUS ROG', 'Elektronik', 15000000, 10),
('Mouse Logitech', 'Elektronik', 250000, 50),
('Keyboard Mechanical', 'Elektronik', 800000, 30),
('Monitor LG 24"', 'Elektronik', 2500000, 15),
('Webcam HD', 'Elektronik', 500000, 25),
('Buku Pemrograman Python', 'Buku', 150000, 100),
('Buku JavaScript Advanced', 'Buku', 200000, 80),
('Headset Gaming', 'Elektronik', 600000, 20);

-- Verify dengan filter
SELECT * FROM produk WHERE kategori = 'Elektronik';
```

**Output:**
```
 produk_id |        nama         |  kategori  |   harga    | stok | tanggal_dibuat
-----------+---------------------+------------+------------+------+----------------
         1 | Laptop ASUS ROG     | Elektronik | 15000000.00|   10 | 2024-11-05
         2 | Mouse Logitech      | Elektronik |   250000.00|   50 | 2024-11-05
         3 | Keyboard Mechanical | Elektronik |   800000.00|   30 | 2024-11-05
         4 | Monitor LG 24"      | Elektronik |  2500000.00|   15 | 2024-11-05
         5 | Webcam HD           | Elektronik |   500000.00|   25 | 2024-11-05
         8 | Headset Gaming      | Elektronik |   600000.00|   20 | 2024-11-05
(6 rows)
```

---

#### Insert Data Pesanan

```sql
INSERT INTO pesanan (pelanggan_id, produk_id, jumlah, total_harga, status) VALUES
(1, 1, 1, 15000000, 'Completed'),
(1, 2, 2, 500000, 'Completed'),
(2, 3, 1, 800000, 'Pending'),
(2, 4, 1, 2500000, 'Shipped'),
(3, 6, 5, 750000, 'Completed'),
(3, 7, 3, 600000, 'Completed'),
(4, 1, 1, 15000000, 'Pending'),
(4, 5, 2, 1000000, 'Shipped'),
(5, 8, 1, 600000, 'Completed'),
(1, 6, 10, 1500000, 'Completed');

-- Verify
SELECT * FROM pesanan ORDER BY pesanan_id;
```

**Output:**
```
 pesanan_id | pelanggan_id | produk_id | jumlah | total_harga |     tanggal_pesan      |  status
------------+--------------+-----------+--------+-------------+------------------------+-----------
          1 |            1 |         1 |      1 | 15000000.00 | 2024-11-05 10:30:15.23 | Completed
          2 |            1 |         2 |      2 |   500000.00 | 2024-11-05 10:31:22.45 | Completed
          3 |            2 |         3 |      1 |   800000.00 | 2024-11-05 11:15:33.12 | Pending
          4 |            2 |         4 |      1 |  2500000.00 | 2024-11-05 11:20:44.89 | Shipped
          5 |            3 |         6 |      5 |   750000.00 | 2024-11-05 12:05:11.67 | Completed
          6 |            3 |         7 |      3 |   600000.00 | 2024-11-05 12:10:28.34 | Completed
          7 |            4 |         1 |      1 | 15000000.00 | 2024-11-05 13:45:55.91 | Pending
          8 |            4 |         5 |      2 |  1000000.00 | 2024-11-05 14:00:12.78 | Shipped
          9 |            5 |         8 |      1 |   600000.00 | 2024-11-05 14:30:40.22 | Completed
         10 |            1 |         6 |     10 |  1500000.00 | 2024-11-05 15:00:33.56 | Completed
(10 rows)
```

---

### Step 3: Explore Data dengan Query Basic

```sql
-- Hitung total pelanggan
SELECT COUNT(*) AS total_pelanggan FROM pelanggan;

-- Hitung total produk per kategori
SELECT kategori, COUNT(*) AS jumlah_produk
FROM produk
GROUP BY kategori;

-- Produk termahal
SELECT nama, harga FROM produk
ORDER BY harga DESC
LIMIT 3;

-- Pesanan dengan status Pending
SELECT * FROM pesanan WHERE status = 'Pending';
```

**Coba sendiri query di atas dan perhatikan hasilnya!**

#### 💡 Tipe Data Umum
| Tipe Data | Kegunaan | Contoh |
|-----------|----------|--------|
| `INTEGER` / `INT` | Angka bulat | 100, -50, 0 |
| `SERIAL` | Auto-increment integer | 1, 2, 3, ... |
| `VARCHAR(n)` | Text dengan max panjang | "Budi", "Laptop" |
| `TEXT` | Text tanpa limit | Deskripsi panjang |
| `DECIMAL(m,n)` | Angka desimal presisi | 15000.50 |
| `DATE` | Tanggal | '2024-10-28' |
| `BOOLEAN` | True/False | TRUE, FALSE |

#### 💡 Constraint (Aturan Kolom)
| Constraint | Fungsi | Contoh |
|------------|--------|--------|
| `PRIMARY KEY` | ID unik, tidak boleh duplikat | produk_id |
| `NOT NULL` | Wajib diisi | nama, email |
| `UNIQUE` | Nilai harus unik | email |
| `DEFAULT` | Nilai default jika tidak diisi | stok DEFAULT 0 |
| `CHECK` | Validasi custom | CHECK (harga > 0) |
| `FOREIGN KEY` | Relasi ke tabel lain | pelanggan_id REFERENCES pelanggan(pelanggan_id) |

#### Contoh: Tabel dengan Relasi
```sql
-- Tabel Induk (Parent)
CREATE TABLE pelanggan (
    pelanggan_id SERIAL PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    tanggal_daftar DATE DEFAULT CURRENT_DATE
);

-- Tabel Anak (Child) dengan Foreign Key
CREATE TABLE pesanan (
    pesanan_id SERIAL PRIMARY KEY,
    pelanggan_id INTEGER NOT NULL,
    tanggal_pesan DATE NOT NULL,
    total_harga DECIMAL(10, 2) NOT NULL CHECK (total_harga > 0),
    status_pesanan VARCHAR(50) DEFAULT 'Pending',

    -- Foreign Key Constraint
    CONSTRAINT fk_pelanggan
        FOREIGN KEY (pelanggan_id)
        REFERENCES pelanggan(pelanggan_id)
);
```

### ALTER TABLE - Mengubah Struktur

```sql
-- Tambah kolom baru
ALTER TABLE pelanggan
ADD COLUMN nomor_telepon VARCHAR(20);

-- Hapus kolom
ALTER TABLE pelanggan
DROP COLUMN nomor_telepon;

-- Ubah tipe data
ALTER TABLE pelanggan
ALTER COLUMN email TYPE TEXT;

-- Tambah constraint
ALTER TABLE pesanan
ADD CONSTRAINT chk_status
CHECK (status_pesanan IN ('Pending', 'Processing', 'Completed', 'Cancelled'));
```

---

## 2.3 DML - Insert & Update Data (15 menit)

### INSERT - Menambah Data

#### Syntax
```sql
INSERT INTO nama_tabel (kolom1, kolom2, ...)
VALUES (nilai1, nilai2, ...);
```

#### Contoh
```sql
-- Insert 1 row
INSERT INTO pelanggan (nama, email, tanggal_daftar)
VALUES ('Budi Santoso', 'budi@mail.com', '2024-10-01');

-- Insert multiple rows sekaligus
INSERT INTO pelanggan (nama, email) VALUES
('Citra Dewi', 'citra@mail.com'),
('Ahmad Fauzi', 'ahmad@mail.com'),
('Dewi Lestari', 'dewi@mail.com');

-- Insert dengan memanfaatkan default value
INSERT INTO produk (nama, harga) VALUES ('Laptop', 5000000);
-- stok otomatis = 0, tanggal_dibuat = hari ini
```

### UPDATE - Mengubah Data

#### Syntax
```sql
UPDATE nama_tabel
SET kolom1 = nilai1, kolom2 = nilai2
WHERE kondisi;
```

#### Contoh
```sql
-- Update 1 row spesifik
UPDATE pelanggan
SET nomor_telepon = '081234567890'
WHERE pelanggan_id = 1;

-- Update multiple columns
UPDATE produk
SET harga = 4500000, stok = 15
WHERE produk_id = 1;

-- Update dengan kalkulasi
UPDATE produk
SET harga = harga * 1.1  -- Naikkan harga 10%
WHERE kategori = 'Elektronik';
```

#### ⚠️ PENTING: Selalu Pakai WHERE!
```sql
-- ❌ BAHAYA! Ini update SEMUA row
UPDATE pelanggan
SET nama = 'Test';

-- ✅ AMAN: Update row spesifik saja
UPDATE pelanggan
SET nama = 'Test'
WHERE pelanggan_id = 1;
```

---

## 2.4 DQL - Query Data Basic (20 menit)

### SELECT - Membaca Data

#### Syntax Dasar
```sql
SELECT kolom1, kolom2, ...
FROM nama_tabel
WHERE kondisi
ORDER BY kolom ASC/DESC
LIMIT jumlah;
```

#### Contoh Query Basic
```sql
-- Ambil semua kolom & semua row
SELECT * FROM pelanggan;

-- Ambil kolom tertentu saja
SELECT nama, email FROM pelanggan;

-- Filter dengan WHERE
SELECT * FROM pelanggan
WHERE tanggal_daftar > '2024-01-01';

-- Multiple conditions
SELECT * FROM produk
WHERE kategori = 'Elektronik' AND harga < 1000000;

-- Pattern matching dengan LIKE
SELECT * FROM pelanggan
WHERE email LIKE '%@gmail.com%';  -- % = wildcard (apa saja)

-- Sorting
SELECT * FROM produk
ORDER BY harga DESC;  -- Termahal dulu

-- Limit result
SELECT * FROM produk
ORDER BY tanggal_dibuat DESC
LIMIT 5;  -- 5 produk terbaru
```

#### 💡 Operator WHERE
| Operator | Contoh | Keterangan |
|----------|--------|------------|
| `=` | `harga = 1000` | Sama dengan |
| `!=` atau `<>` | `status != 'Pending'` | Tidak sama dengan |
| `>`, `<`, `>=`, `<=` | `harga > 500000` | Perbandingan |
| `AND` | `harga > 100 AND stok > 0` | Kedua kondisi TRUE |
| `OR` | `kategori = 'A' OR kategori = 'B'` | Salah satu TRUE |
| `IN` | `status IN ('Pending', 'Processing')` | Dalam list |
| `LIKE` | `nama LIKE '%Budi%'` | Pattern matching |
| `IS NULL` | `nomor_telepon IS NULL` | Cek nilai NULL |
| `IS NOT NULL` | `email IS NOT NULL` | Tidak NULL |

### NULL Handling

#### Konsep NULL
`NULL` ≠ 0, `NULL` ≠ '', `NULL` = **tidak ada nilai**

```sql
-- Cek data yang NULL
SELECT * FROM pelanggan
WHERE nomor_telepon IS NULL;

-- Cek data yang TIDAK NULL
SELECT * FROM pelanggan
WHERE nomor_telepon IS NOT NULL;

-- ❌ SALAH: NULL tidak bisa pakai = atau !=
SELECT * FROM pelanggan
WHERE nomor_telepon = NULL;  -- Ini tidak akan return apa-apa!

-- ✅ BENAR: Pakai IS NULL atau IS NOT NULL
```

---

## 2.5 Aggregate Functions & GROUP BY (25 menit)

### Aggregate Functions - Fungsi Perhitungan

#### Konsep Awam
Aggregate = **merangkum banyak data jadi 1 nilai**
- Seperti menghitung total nilai di nota belanja
- Atau menghitung rata-rata nilai ujian

#### Fungsi-fungsi Aggregate
```sql
-- COUNT: Hitung jumlah row
SELECT COUNT(*) FROM pelanggan;
SELECT COUNT(nomor_telepon) FROM pelanggan;  -- Hanya hitung yang tidak NULL

-- SUM: Jumlahkan nilai
SELECT SUM(total_harga) FROM pesanan;

-- AVG: Rata-rata
SELECT AVG(total_harga) FROM pesanan;

-- MAX/MIN: Nilai terbesar/terkecil
SELECT MAX(total_harga) FROM pesanan;
SELECT MIN(harga) FROM produk;

-- Multiple aggregates sekaligus
SELECT
    COUNT(*) AS jumlah_pesanan,
    SUM(total_harga) AS total_pendapatan,
    AVG(total_harga) AS rata_rata_pesanan,
    MAX(total_harga) AS pesanan_terbesar
FROM pesanan;
```

### GROUP BY - Kelompokkan Data

#### Analogi
Seperti **membagi siswa berdasarkan kelas**, lalu hitung statistik per kelas:
- Kelas A: 30 siswa, rata-rata 85
- Kelas B: 28 siswa, rata-rata 88

#### Syntax
```sql
SELECT kolom_grup, AGGREGATE_FUNCTION(kolom)
FROM nama_tabel
GROUP BY kolom_grup;
```

#### Contoh: Statistik per Pelanggan
```sql
-- Hitung jumlah pesanan per pelanggan
SELECT
    pelanggan_id,
    COUNT(pesanan_id) AS jumlah_pesanan
FROM pesanan
GROUP BY pelanggan_id;

-- Hitung total belanja per pelanggan
SELECT
    pelanggan_id,
    COUNT(pesanan_id) AS jumlah_pesanan,
    SUM(total_harga) AS total_belanja,
    AVG(total_harga) AS rata_rata_belanja
FROM pesanan
GROUP BY pelanggan_id
ORDER BY total_belanja DESC;
```

#### Contoh: Statistik per Kategori
```sql
-- Total stok & nilai per kategori produk
SELECT
    kategori,
    COUNT(*) AS jumlah_produk,
    SUM(stok) AS total_stok,
    SUM(stok * harga) AS total_nilai
FROM produk
GROUP BY kategori
ORDER BY total_nilai DESC;
```

### HAVING - Filter Hasil Aggregate

#### HAVING vs WHERE
- `WHERE` → Filter SEBELUM grouping
- `HAVING` → Filter SETELAH grouping

```sql
-- Cari pelanggan yang sudah pesan > 2 kali
SELECT
    pelanggan_id,
    COUNT(pesanan_id) AS jumlah_pesanan
FROM pesanan
GROUP BY pelanggan_id
HAVING COUNT(pesanan_id) > 2;

-- Kategori produk dengan total nilai > 10 juta
SELECT
    kategori,
    SUM(stok * harga) AS total_nilai
FROM produk
GROUP BY kategori
HAVING SUM(stok * harga) > 10000000;
```

### DISTINCT, LIMIT, OFFSET

```sql
-- DISTINCT: Hapus duplikat
SELECT DISTINCT kategori FROM produk;

-- LIMIT: Batasi jumlah result
SELECT * FROM produk LIMIT 10;

-- OFFSET: Skip beberapa row (untuk pagination)
SELECT * FROM produk
LIMIT 10 OFFSET 20;  -- Row 21-30
```

---

## 2.6 JOIN - Menggabungkan Tabel (30 menit)

### Konsep Relasi Database

#### Analogi
Seperti **2 buku catatan terpisah** yang punya kolom penghubung:
- Buku A: Data Siswa (NIS, Nama)
- Buku B: Data Nilai (NIS, Mata Pelajaran, Nilai)

JOIN = Gabungkan 2 buku berdasarkan NIS yang sama.

#### Jenis-jenis JOIN

```
                    LEFT TABLE              RIGHT TABLE
                   ┌─────────────┐         ┌─────────────┐
INNER JOIN:        │      A      │    ∩    │      B      │  → Hanya yang match
                   └─────────────┘         └─────────────┘
                   ┌─────────────┐         ┌─────────────┐
LEFT JOIN:         │█████ A █████│         │      B      │  → Semua A + B yang match
                   └─────────────┘         └─────────────┘
                   ┌─────────────┐         ┌─────────────┐
RIGHT JOIN:        │      A      │         │█████ B █████│  → Semua B + A yang match
                   └─────────────┘         └─────────────┘
                   ┌─────────────┐         ┌─────────────┐
FULL OUTER JOIN:   │█████ A █████│         │█████ B █████│  → Semua A & B
                   └─────────────┘         └─────────────┘
```

### INNER JOIN - Hanya Data yang Match

#### Syntax
```sql
SELECT kolom1, kolom2, ...
FROM tabel1
INNER JOIN tabel2 ON tabel1.kolom = tabel2.kolom;
```

#### Contoh: Gabung Pelanggan & Pesanan
```sql
-- Tampilkan pesanan beserta nama pelanggan
SELECT
    pesanan.pesanan_id,
    pelanggan.nama AS nama_pelanggan,
    pesanan.tanggal_pesan,
    pesanan.total_harga,
    pesanan.status_pesanan
FROM pesanan
INNER JOIN pelanggan ON pesanan.pelanggan_id = pelanggan.pelanggan_id;

-- Dengan alias (lebih ringkas)
SELECT
    o.pesanan_id,
    p.nama AS nama_pelanggan,
    o.tanggal_pesan,
    o.total_harga
FROM pesanan o          -- o = alias untuk pesanan
INNER JOIN pelanggan p  -- p = alias untuk pelanggan
ON o.pelanggan_id = p.pelanggan_id;
```

### LEFT JOIN - Semua Data Kiri + Match Kanan

```sql
-- Tampilkan SEMUA pelanggan (termasuk yang belum pernah pesan)
SELECT
    p.nama,
    p.email,
    COUNT(o.pesanan_id) AS jumlah_pesanan
FROM pelanggan p
LEFT JOIN pesanan o ON p.pelanggan_id = o.pelanggan_id
GROUP BY p.pelanggan_id, p.nama, p.email;

-- Cari pelanggan yang BELUM PERNAH pesan
SELECT p.nama, p.email
FROM pelanggan p
LEFT JOIN pesanan o ON p.pelanggan_id = o.pelanggan_id
WHERE o.pesanan_id IS NULL;
```

### JOIN + GROUP BY - Statistik Relasional

```sql
-- Total pesanan & rata-rata harga per pelanggan
SELECT
    p.nama AS nama_pelanggan,
    p.email,
    COUNT(o.pesanan_id) AS jumlah_pesanan,
    SUM(o.total_harga) AS total_belanja,
    AVG(o.total_harga) AS rata_rata_pesanan
FROM pelanggan p
INNER JOIN pesanan o ON p.pelanggan_id = o.pelanggan_id
GROUP BY p.pelanggan_id, p.nama, p.email
ORDER BY total_belanja DESC;
```

### 💡 Tips JOIN
1. Selalu pakai **alias** untuk tabel (lebih clean)
2. Gunakan `INNER JOIN` jika hanya mau data yang match
3. Gunakan `LEFT JOIN` jika mau include data yang tidak match
4. Jika aggregate + join, jangan lupa `GROUP BY` semua kolom non-aggregate

---
