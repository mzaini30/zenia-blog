function init(){
  let elemenBermasalah = document.querySelector('.sidebar-nav li.active')
  elemenBermasalah.innerHTML = elemenBermasalah.innerHTML.replace('undefined', '')
}
setTimeout(init, 500)
setTimeout(init, 1000)
setTimeout(init, 1500)
setTimeout(init, 2000)