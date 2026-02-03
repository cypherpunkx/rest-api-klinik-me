# 🏥 Rest API Klinik

Rest API untuk sistem manajemen klinik yang digunakan untuk mengelola data pasien, dokter, dan layanan klinik.

---

## 📌 Fitur

- Manajemen Data Pasien
- Manajemen Data Dokter
- Manajemen Layanan Klinik
- RESTful API
- Menggunakan Express.js
- Support Environment Variable

---

## 🛠️ Teknologi

- Node.js
- Express.js
- MySQL / Database
- dotenv
- Nodemon

---

## 📦 Installation

### 1. Clone Repository

```bash
git clone https://github.com/USERNAME/NAMAREPO.git
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

### ✅ Get Semua Pasien

```
GET /api/pasien
```

### ✅ Tambah Pasien

```
POST /api/pasien
```

Body JSON:

```json
{
  "nama": "Budi",
  "alamat": "Jakarta",
  "telepon": "08123456789"
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

Dibuat oleh: **Nama Kamu**
