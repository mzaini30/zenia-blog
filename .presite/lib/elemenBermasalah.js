function init() {
  let elemenBermasalah = document.querySelector(".sidebar-nav li.active");
  if (elemenBermasalah){
    elemenBermasalah.innerHTML = elemenBermasalah.innerHTML.replace(
      "undefined",
      ""
    );
  }

  document.querySelector('div.search:nth-child(2)').style.display = 'none'
  document.querySelector('div.search:nth-child(1) > div:nth-child(1) > input:nth-child(1)').setAttribute('placeholder', 'Cari apa?')
}
setTimeout(init, 500);
setTimeout(init, 1000);
setTimeout(init, 1500);
setTimeout(init, 2000);
