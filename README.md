<div align="center">
  
  # Wattly
  ### Kenali, Hitung, dan Kendalikan Konsumsi Listrikmu
  
  [![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-success?style=for-the-badge)](https://wattlyy.netlify.app/)
  [![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/rahus139/Wattly)
  [![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
  
  **Submission for ITECHNO CUP 2026 - Web Development**
  
  **By Tim Optiwatts**
  
</div>

---

## 📋 Daftar Isi

- [Tentang Proyek](#-tentang-proyek)
- [Fitur Unggulan](#-fitur-unggulan)
- [Demo & Screenshot](#-demo--screenshot)
- [Teknologi](#-teknologi)
- [Arsitektur Sistem](#-arsitektur-sistem)
- [Instalasi & Setup](#-instalasi--setup)
- [Penggunaan](#-penggunaan)
- [Modul Internal](#-modul-internal-pengganti-api)
- [Testing](#-testing)
- [Tim Developer](#-tim-pengembang)
- [Lisensi](#-lisensi)

---

## 👥 Tim Developer

| Nama | Peran | GitHub |
|------|-------|--------|
| **[Geovano]** | Project Lead & UI/UX Designer| 
| **[Rava Husni Putra Hamid]** | Frontend Devoloper| 
| **[Muhammad Haidar Sava]** | Backend Developer | 

---

## 🎯 Tentang Proyek

### Latar Belakang

Banyak rumah tangga dan pelaku UMKM ingin berhemat listrik, tetapi tidak tahu persis berapa watt yang dikonsumsi tiap alat elektronik yang mereka pakai sehari-hari, sehingga pemborosan baru disadari setelah tagihan bulanan membengkak. Sejalan dengan SDG 7 (Energi Bersih dan Terjangkau), dibutuhkan platform edukasi yang membantu masyarakat memahami pola konsumsi listrik mereka sebelum tagihan datang.

### Solusi yang Ditawarkan

Optiwatts adalah website edukasi sekaligus simulasi yang membantu pengguna mengenal watt tiap alat elektronik, menghitung estimasi biaya lewat Kalkulator kWh, dan mensimulasikan tagihan bulanan secara visual lewat Smart Bill Simulator — denah rumah interaktif tempat pengguna menempatkan alat listrik ke tiap ruangan dan langsung melihat dampaknya pada tagihan.

### Tujuan Proyek

- 🎯 **Tujuan Utama**: Membantu rumah tangga dan pelaku UMKM memahami dan mengendalikan konsumsi listrik sebelum tagihan membengkak
- 📊 **Target Pengguna**: Masyarakat umum (rumah tangga) dan pelaku UMKM yang ingin lebih hemat energi listrik
- 💡 **Value Proposition**: Simulasi visual berbasis denah rumah yang interaktif (mirip Tinkercad), bukan sekadar kalkulator angka, sehingga pengguna dapat "melihat" langsung dampak tiap alat terhadap tagihan mereka

---

## ✨ Fitur Unggulan

### Fitur Utama

| Fitur | Deskripsi | Keunggulan |
|----------|--------------|---------------|
| **Ensiklopedia Alat Elektronik** | Menampilkan daftar alat elektronik rumah tangga & UMKM beserta estimasi dayanya (watt) | Membantu pengguna mengenali konsumsi daya alat sebelum menghitung tagihan |
| **Kalkulator kWh** | Menghitung estimasi biaya listrik dari alat dan durasi pemakaian yang dipilih pengguna | Perhitungan cepat tanpa perlu rumus manual |
| **Smart Bill Simulator** | Denah rumah 2D interaktif tempat pengguna menempatkan alat listrik ke tiap ruangan (Ruang Tamu, Kamar Tidur, Dapur, Area Usaha UMKM) dan mengatur durasi pemakaiannya | Visualisasi denah membuat simulasi lebih intuitif dibanding kalkulator konvensional |
| **Analisis & Tips Hemat Otomatis** | Memberikan estimasi tagihan bulanan beserta rekomendasi penghematan berdasarkan pola pemakaian alat | Rekomendasi dihasilkan otomatis dari logika pemakaian, bukan saran generik |

### Fitur Tambahan

- **Halaman Edukasi (About)** - Penjelasan tentang pentingnya efisiensi energi dan kaitannya dengan SDG 7
- **Navigasi Responsif** - Menu yang menyesuaikan tampilan di perangkat mobile maupun desktop
- **Pencarian Alat Elektronik** - Kolom pencarian cepat pada halaman Elektronik
- **Identitas Visual Konsisten** - Tema warna biru dongker & cyan yang konsisten di seluruh halaman

---

## 📸 Demo & Screenshot

### Live Demo

🔗 **[Kunjungi Website](https://[URL_DEMO])**

### Screenshot Aplikasi

<div align="center">
  <img src="[URL_SCREENSHOT_1]" alt="Homepage" width="800"/>
  <p><em>Homepage - Tampilan utama Optiwatts</em></p>
  
  <img src="[URL_SCREENSHOT_2]" alt="Kalkulator kWh" width="800"/>
  <p><em>Kalkulator kWh - Menghitung estimasi biaya listrik</em></p>
  
  <img src="[URL_SCREENSHOT_3]" alt="Smart Bill Simulator" width="800"/>
  <p><em>Smart Bill Simulator - Simulasi denah rumah interaktif</em></p>
</div>


---

## 🛠️ Teknologi

### Tech Stack

#### Frontend
```
Framework    : - (HTML5 murni untuk halaman utama; React untuk komponen Smart Bill Simulator)
UI Library   : CSS custom (halaman utama), Tailwind CSS (Smart Bill Simulator)
State Mgmt   : React useState (khusus Smart Bill Simulator)
Validation   : - (tidak ada form kompleks yang memerlukan validasi)
```

#### Backend
```
Runtime      : - (website statis, tidak memakai server/backend)
Framework    : -
Database     : - (tidak ada, data bersifat statis di dalam kode)
ORM          : -
Auth         : - (tidak ada sistem login/registrasi)
```

#### DevOps & Tools
```
Deployment   : [isi platform hosting kalian, mis. GitHub Pages / Netlify / Vercel]
CI/CD        : -
Testing      : Pengujian manual di browser (belum ada automated testing)
Monitoring   : -
```

### Alasan Pemilihan Teknologi

| Teknologi | Alasan Pemilihan |
|-----------|------------------|
| **HTML5, CSS3 & JavaScript (vanilla)** | Ringan dan cepat dimuat, cukup untuk kebutuhan website edukasi & kalkulasi tanpa proses data kompleks di server |
| **React** | Memudahkan pengelolaan interaksi drag-and-drop dan pembaruan tampilan real-time (slider durasi, hasil simulasi) pada Smart Bill Simulator |
| **Tailwind CSS** | Mempercepat proses styling sekaligus menjaga konsistensi warna & spacing dengan halaman lain di Optiwatts |

### Dependencies Utama

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.4.0"
  }
}
```

---

## 🏗️ Arsitektur Sistem

### System Architecture

```
Optiwatts adalah website statis (client-side only) tanpa backend/server terpisah. Seluruh logika kalkulasi (Kalkulator kWh & Smart Bill Simulator) dijalankan langsung di browser pengguna dengan JavaScript, tanpa memanggil API eksternal.
```

### Database Schema

```
Tidak ada database. Data tarif listrik (Rp1.444/kWh untuk golongan 1300VA) dan daftar alat elektronik beserta estimasi wattnya disimpan sebagai data statis (constant) langsung di dalam kode.
```

### Folder Structure

```
optiwatts/
├── index.html          # Halaman utama (Home)
├── About.html          # Halaman edukasi & SDG 7
├── calculator.html     # Halaman Kalkulator kWh
├── Elektronik.html     # Ensiklopedia alat elektronik & watt
├── style.css           # Styling utama seluruh halaman
├── calculate.css       # Styling khusus halaman kalkulator
├── nav.js, fitur1.js, listcek.js, biaya.js, searhc_bar.js  # Logika tiap fitur
├── SmartBillSimulator.jsx  # Komponen React fitur Smart Bill Simulator
├── *.png, *.jpeg        # Aset gambar & ikon alat elektronik
└── README.md
    (tidak ada folder docs/ terpisah pada versi saat ini)
```

---

## ⚙️ Instalasi & Setup

### Prerequisites

Pastikan Anda telah menginstall:
- **Node.js** (v18.x atau lebih tinggi) — hanya diperlukan untuk menjalankan komponen Smart Bill Simulator (React)
- **npm** / **yarn** / **pnpm**
- **Browser modern** (Chrome, Edge, atau Firefox) untuk membuka halaman statis
- **Git**

### Langkah Instalasi

#### 1️⃣ Clone Repository

```bash
git clone https://github.com/[username]/[repo-name].git
cd [repo-name]
```

#### 2️⃣ Install Dependencies

```bash
# Menggunakan npm
npm install

# Atau menggunakan yarn
yarn install

# Atau menggunakan pnpm
pnpm install
```

#### 3️⃣ Setup Environment Variables

Buat file `.env` di root directory (opsional — saat ini Optiwatts belum memerlukan backend/database; contoh di bawah untuk pengembangan lanjutan):

```env
# Database
DATABASE_URL="[connection_string]"

# Authentication
JWT_SECRET="[your_jwt_secret]"
NEXTAUTH_SECRET="[your_nextauth_secret]"

# API Keys
API_KEY="[your_api_key]"

# Other configs
NODE_ENV="development"
PORT=3000
```

#### 4️⃣ Setup Database (Belum Diperlukan Saat Ini)

```bash
# Jalankan migrasi database
npm run db:migrate

# Seed data (opsional)
npm run db:seed
```

#### 5️⃣ Run Development Server

```bash
npm run dev
```

Komponen akan berjalan sesuai port default bundler yang digunakan (mis. `http://localhost:5173` untuk Vite). Untuk halaman utama (statis), cukup buka `index.html` langsung di browser.

---

## 🚀 Penggunaan

### Menjalankan Aplikasi

```bash
# Development mode
npm run dev

# Production build
npm run build
npm run start

# Run tests
npm run test

# Linting
npm run lint
```

### User Guide

#### Untuk Pengguna Umum

1. **Jelajahi Alat Elektronik**: Buka halaman "Elektronik" untuk melihat daftar alat listrik rumah tangga & UMKM beserta estimasi wattnya
2. **Hitung dengan Kalkulator kWh**: Buka halaman "Calculator", pilih alat dan masukkan durasi pemakaian untuk mendapat estimasi biaya cepat
3. **Simulasikan dengan Smart Bill Simulator**: Seret alat listrik ke ruangan pada denah rumah, atur durasi pemakaian tiap alat, lalu klik "Mulai Simulasi Tagihan" untuk melihat estimasi tagihan bulanan beserta tips hemat

#### Catatan

Optiwatts saat ini belum memiliki panel admin — seluruh data alat elektronik & tarif bersifat statis di dalam kode.

---

## 📚 Modul Internal (Pengganti API)

### Mengapa Tidak Ada API?

Optiwatts adalah website statis tanpa backend/server, sehingga tidak ada endpoint API yang perlu didokumentasikan.
Seluruh perhitungan (Kalkulator kWh & Smart Bill Simulator) berjalan langsung di sisi klien (browser).

### Modul JavaScript Utama

| Modul | Fungsi |

|-------|--------|
| `nav.js` | Navigasi & menu mobile |
| `fitur1.js` | Pencarian alat & perhitungan Wh pada Kalkulator kWh |
| `listcek.js` | Mengelola daftar alat yang ditambahkan & tombol hitung/reset |
| `biaya.js` | Menghitung total biaya dari total daya (Wh) terkumpul |
| `searhc_bar.js` | Pencarian alat elektronik pada halaman Elektronik |

| `SmartBillSimulator.jsx` | Komponen React untuk fitur Smart Bill Simulator |





---

## 🧪 Testing

### Menjalankan Test (Rencana ke Depan)

```bash
# Unit tests
npm run test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# Test coverage
npm run test:coverage
```

### Status Saat Ini

```
Saat ini Optiwatts belum memiliki automated test (unit/integration/e2e).
Pengujian dilakukan secara manual dengan mencoba tiap fitur langsung di browser
(navigasi, Kalkulator kWh, dan Smart Bill Simulator).
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE) - lihat file LICENSE untuk detail lebih lanjut.

---

<div align="center">

  **Made with ❤️ by Tim Optiwatts for ITECHNO CUP 2026**

  
</div>

