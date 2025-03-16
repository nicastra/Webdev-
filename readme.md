# Dokumentasi Kode Task

Dokumentasi ini menjelaskan fungsi-fungsi JavaScript/TypeScript yang dibuat untuk menyelesaikan beberapa task umum.

## Daftar Isi

1. [Fahrenheit ke Celsius](#fahrenheit-ke-celsius)
2. [Centimeter ke Kilometer](#centimeter-ke-kilometer)
3. [Pengecekan Bilangan Ganjil](#pengecekan-bilangan-ganjil)
4. [Menghapus Kemunculan Pertama Substring](#menghapus-kemunculan-pertama-substring)
5. [Pengecekan Palindrom](#pengecekan-palindrom)

---

## Fahrenheit ke Celsius

### `fahrenheitToCelcius(fahrenheit: number): string`

Mengkonversi suhu dari Fahrenheit ke Celsius dengan presisi 2 angka desimal.

**Parameter:**

- `fahrenheit`: Nilai suhu dalam Fahrenheit (angka)

**Return:**

- String hasil konversi dengan format `XX.00°C`

**Contoh:**

```typescript
console.log(fahrenheitToCelcius(68)); // Output: "20.00"
```

---

## Centimeter ke Kilometer

### `cmToKm(cenitimeters: number): string`

Mengkonversi panjang dari centimeter ke kilometer.

**Parameter:**

- `cenitimeters`: Nilai panjang dalam centimeter (angka)

**Return:**

- String hasil konversi dengan format `X Km` (tanpa desimal)

**Contoh:**

```typescript
console.log(cmToKm(100000)); // Output: "1 Km"
```

---

## Pengecekan Bilangan Ganjil

### `isOdd(n: number): boolean`

Memeriksa apakah sebuah bilangan termasuk ganjil.

**Parameter:**

- `n`: Bilangan yang akan diperiksa

**Return:**

- `true` jika ganjil, `false` jika genap

**Contoh:**

```typescript
console.log(isOdd(3)); // Output: true
console.log(isOdd(4)); // Output: false
```

---

## Menghapus Kemunculan Pertama Substring

### `removeFirsOccurence(original: string, search: string): string`

Menghapus kemunculan pertama substring dalam sebuah string.

**Parameter:**

- `original`: String asli
- `search`: Substring yang ingin dihapus

**Return:**

- String hasil penghapusan (jika substring tidak ditemukan, kembalikan string asli)

**Contoh:**

```typescript
console.log(removeFirsOccurence("Hello world", "world")); // Output: "Hello "
console.log(removeFirsOccurence("apple orange apple", "apple")); // Output: " orange apple"
```

---

## Pengecekan Palindrom

### `isPalindrome(str: string): boolean`

Memeriksa apakah sebuah string adalah palindrom (membaca sama dari depan dan belakang).

**Fitur:**

- Mengabaikan kapitalisasi
- Mengabaikan karakter non-alphanumeric

**Parameter:**

- `str`: String yang akan diperiksa

**Return:**

- `true` jika palindrom, `false` jika tidak

**Contoh:**

```typescript
console.log(isPalindrome("Katak")); // Output: true
console.log(isPalindrome("Malam")); // Output: true
console.log(isPalindrome("12321")); // Output: true
console.log(isPalindrome("Hello")); // Output: false
```

---

## Cara Penggunaan

1. Salin fungsi yang diinginkan ke proyek Anda
2. Panggil fungsi dengan parameter sesuai kebutuhan
3. Untuk fungsi konversi suhu dan panjang, hasil dikembalikan dalam bentuk string yang sudah diformat

## Kontribusi

Jika menemukan masalah atau ingin menambahkan fitur, silakan buka issue atau pull request.

## Lisensi

Kode ini disediakan untuk tujuan edukasi. Penggunaan komersial memerlukan izin tertulis.
