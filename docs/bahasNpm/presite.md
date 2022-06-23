# Ubah SPA Menjadi MPA Secara Instan!

Sudah bukan rahasia lagi kalau mau membuat aplikasi website itu, idealnya pakai teknik SPA yaitu single page application.

Tapi, sayangnya idealisme kita itu akan terkikis dengan kenyataan bahwa kira harus membuat website yang MPA (multi page application). Tentu saja hal ini membuat kita pusing karena harus membuat website yang SPA saat dev, tapi harus MPA saat build. Artinya, antara menggunakan SSG atau SSR.

Kalau SSR, kita perlu server. Kalau SSG, kita menjalankan server saat membuild halaman-halaman. Keduanya itu settingnya ribet dan ada aturan baru yang nggak boleh kita langgar yaitu semua kode harus server side. Kalau ingin menjalankan kode yang client side, harus dibungkus dan kondisional tertentu. Contohnya kalau di Svelte:

```javascript
import {browser} from "$app/env"

if (browser){
	// kode client side
}
```

Lalu, aku pun bertanya: Ada nggak sih yang instan?

Akhirnya, aku menemukan `presite`.

## Cara Install Presite

Sama seperti package lainnya:

```bash
npm i -g presite
```

## Cara Menjalankan Presite

Presite harus berada di parent-nya folder yang berisi SPA. Lalu, contoh cara buildnya adalah seperti ini:

```bash
presite src/
```

Lalu, akan terbentuk folder `.presite` yang merupakan hasil crawl dan mengubahnya menjadi halaman-halaman HTML.

Cuma sayangnya, masih belum bisa dipakai di Termux karena dia akan menjalankan Puppeter yang memerlukan Chrome heasless di PC atau laptop.
