# Management Kue Rifky

Aplikasi manajemen toko kue dengan dashboard persediaan, pencatatan bahan baku, stok masuk dan keluar, pelanggan, produk, resep, transaksi, serta pengingat stok minimum dan kedaluwarsa.

## Database

1. Buat database MySQL atau TiDB bernama `management_kue_rifky`.
2. Jalankan seluruh isi `database/schema.sql` melalui SQL Editor.
3. Atur variabel koneksi berdasarkan `backend/.env.example`.

## Backend

```bash
cd backend
npm install
npm start
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Alur stok

- Stok masuk dan keluar dicatat melalui menu Stok masuk/keluar.
- Setiap bahan memiliki stok minimum.
- Dashboard menampilkan bahan yang mencapai batas minimum dan bahan yang mendekati kedaluwarsa.
- Produk dapat diberi komposisi resep. Saat transaksi penjualan dibuat, stok bahan resep berkurang dalam transaksi database dan tercatat sebagai stok keluar.

## Catatan

Sistem awal ini mendukung satu produk per transaksi dari antarmuka kasir. API checkout mendukung daftar item. Pengingat kedaluwarsa memakai batas tujuh hari secara default, sedangkan pengaturan hari tersimpan per bahan untuk pengembangan lanjutan.
