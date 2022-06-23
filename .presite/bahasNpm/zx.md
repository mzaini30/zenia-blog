# Cara Mudah Buat CLI dengan JS

Itulah zx! Dengan zx, kita bisa buat program CLI dengan sintaks JavaScript. Contohnya aja program `hello.mjs` berikut:

```javascript
let nama = await question("Siapa nama: ")
echo(`Halo ${nama}`)
```

Jadi, nanti dia akan menanyakan nama, terus akan mereturn teks: Hello namanya.

Tapi kayaknya kode di atas nggak ada bau-baunya Bash ya. Coba deh kita coba dengan script lainnya:

```javascript
let nama = await question("Nama file: ")
await $`touch ${nama}`
echo(`${nama} sudah dibuat`)
```

Jadi, nanti dia akan nanya tentang nama file yang akan dibuat, lalu dia akan membuatnya.

## Menjalankan Script zx

Install dulu zx dengan perintah: `npm i -g zx`. Lalu, contoh cara memanggilnya, seperti ini: `zx hello.mjs`. Simpel banget kan?
