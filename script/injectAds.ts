import { sync } from "fast-glob";
import { readFileSync, writeFileSync } from "fs";

const semuaFile = sync(".presite/**/*.html");
for (let x of semuaFile) {
  let isi = readFileSync(x).toString();
  isi = isi.replace(
    "<head>",
    `<head><script async='async' crossorigin='anonymous' src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2408628281705149'></script>`
  );
  writeFileSync(x, isi);
}
