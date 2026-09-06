const bar = document.getElementById("bar");
bar.addEventListener('keyup', e => {
  let currentvalue = e.target.value.toLowerCase();
  console.log(currentvalue)
})