# 🏥 Rest API Klinik

Rest API untuk sistem manajemen klinik yang digunakan untuk mengelola dokter, dan layanan jadwal praktek.

---

## 📌 Fitur

- Manajemen Data Jadwal Praktek
- Manajemen Data Dokter
- Manajemen Layanan Booking
- RESTful API
- Menggunakan Express.js
- Support Environment Variable

---

## 🛠️ Teknologi

- Node.js
- Express.js
- MySQL / Database
- dotenv
- Tsx
- Drizzle

---

## 📦 Installation

### 1. Clone Repository

```bash
git clone https://github.com/cypherpunkx/rest-api-klinik-me.git
```

### 2. Masuk ke Folder Project

```bash
cd NAMAREPO
```

### 3. Install Dependency

```bash
npm install
```

---

## ⚙️ Environment Setup

Buat file `.env` di root project lalu isi seperti berikut:

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=klinik
```

---

## ▶️ Menjalankan Project

### Mode Production

```bash
npm start
```

### Mode Development

```bash
npm run dev
```

---

## 📂 Struktur Folder

```
├── controllers
├── routes
├── models
├── config
├── app.js
├── package.json
└── .env
```

---

## 📡 Contoh Endpoint API

### ✅ Get Semua Dokter

```
GET /api/dokter
```

### ✅ Tambah Dokter

```
POST /api/dokter
```

Body JSON:

```json
{
  "nama": "Budi",
  "jenis": "Umum"
}
```

---

## 🧪 Testing API

Gunakan:

- Postman
- Thunder Client (VS Code)
- Insomnia

---

## ❗ Notes

Pastikan database sudah dibuat sebelum menjalankan project.

---

## 👨‍💻 Author

Dibuat oleh: **Rafly Mahendra**
