//fitur1.js
const foto_element = document.getElementById("gambar");
const volt_element = document.getElementById("tema");
const benda = document.getElementById("ini");
const tombolSearch = document.getElementById("hasil");
const durasi = document.getElementById("lama1");



let alat = "";

const daftarAlat = {
  lampu: { nama: "Lampu", daya: 40, gambar: "lampu.png" },
  charger: { nama: "Charger", daya: 15, gambar: "charger.png" },
  kipas: { nama: "Kipas", daya: 55, gambar: "kipas.png" },
  televisi: { nama: "Televisi", daya: 100, gambar: "tv.png" },
  tv: { nama: "Televisi", daya: 100, gambar: "tv.png" }
};

function jumlah_KWH() {
  let lama = parseInt(durasi.value) || 0;
  if( lama < 0 ) {
    lama =0;
    durasi.value = 0;
  }
  if ( lama > 24){
  lama = 24;
  durasi.value = 24;
}

  if (daftarAlat[alat]) {
    volt_element.innerHTML = (daftarAlat[alat].daya * lama) + " Wh";
  }
  return alat;
}

tombolSearch.onclick = function() {
  let nama = benda.value.trim().toLowerCase();
  if (daftarAlat[nama]) {
    alat = nama;
    foto_element.src = daftarAlat[alat].gambar;
    foto_element.alt = daftarAlat[alat].nama;
    volt_element.textContent = `${daftarAlat[alat].nama}: ${daftarAlat[alat].daya} watt`;
    jumlah_KWH();
  } else {
    alat = "";
    foto_element.src = "";
    foto_element.alt = "";
    tema.textContent = nama === "" ? "" : "Barang tidak tersedia. Pilih lampu, charger, kipas, atau televisi.";
    volt_element.innerHTML = "";
  }
};

durasi.addEventListener('input', function() {
  jumlah_KWH();
});

export { volt_element};
export { alat };